const supertest = require('supertest');

describe('posts', () => {
  let app;

  beforeEach(() => {
    app = require('../../../server');
  });

  it('GET /api/posts', async () => {
    await supertest(app).get('/api/posts')
      .expect(200)
      .then(response => {
        expect(response.body.success).toBe(true);
        expect(response.body.posts).not.toBe([]);
        expect(response.body.posts.length).toBe(100);
      });
  });

  it('GET /api/posts/10', async () => {
    await supertest(app).get('/api/posts/10')
      .expect(200)
      .then(response => {
        expect(response.body.success).toBe(true);
        expect(response.body.post).not.toBe(null);
      });
  });
})

