const jwt = require('jsonwebtoken');
const generateToken = require('./generateToken');

describe('generateToken', () => {
  test('returns a valid JWT', () => {
    const token = generateToken('123');
    const decoded = jwt.verify(token, 'testsecret');
    expect(decoded.id).toBe('123');
  });
});
