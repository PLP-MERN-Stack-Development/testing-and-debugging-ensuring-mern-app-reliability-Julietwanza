const auth = require('./authMiddleware');
const jwt = require('jsonwebtoken');

jest.mock('jsonwebtoken');
jest.mock('../models/User', () => ({
  findById: jest.fn().mockResolvedValue({ id: 'user1' }),
}));

test('should call next with valid token', async () => {
  jwt.verify.mockReturnValue({ id: 'user1' });
  const req = { headers: { authorization: 'Bearer token' } };
  const res = {};
  const next = jest.fn();

  await auth(req, res, next);
  expect(next).toHaveBeenCalled();
});

test('should return 401 for invalid token', async () => {
  jwt.verify.mockImplementation(() => { throw new Error('bad'); });
  const req = { headers: { authorization: 'Bearer bad' } };
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  const next = jest.fn();

  await auth(req, res, next);
  expect(res.status).toHaveBeenCalledWith(401);
});
