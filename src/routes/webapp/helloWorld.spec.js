const supertest = require('supertest');

describe('helloWorld', () => {
  let app;

  beforeEach(() => {
    app = require('../../server');
  });

  it('GET /', async () => {
    await supertest(app).get('/')
      .expect(200)
      .then(response => {
        expect(response.text).toBe('Hello World!');
      });
  });
})

