import request from 'supertest';

const app = 'http://localhost:3000';

describe('Basic Routes', () => {
  it('should return 200 on GET /basic/test', async () => {
    const response = await request(app).get('/basic/test');
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Basic route is working');
  });
});