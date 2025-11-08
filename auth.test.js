const request = require('supertest');
const app = require('../app');
const db = require('../test/setupTestDB');

beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());

describe('Auth API', () => {
  it('registers a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ email: 'test@x.com', password: '123456' })
      .expect(201);

    expect(res.body.user.email).toBe('test@x.com');
  });

  it('fails login with bad credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'none@x.com', password: 'bad' })
      .expect(401);

    expect(res.body.message).toBe('Invalid credentials');
  });
});
