'use strict';

const app = require('../src/server');
const supertest = require('supertest');

const request = supertest(app);

describe('Testing server', () => {
  test('Should respond with status 200 on GET /', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });
  test('Should respond with 404 on bad routes', async () => {
    const response = await request.get('/asntoeuh');
    expect(response.status).toEqual(404);
  });
  test('Should respond with 404 on bad method', async () => {
    const response = await request.patch('/');
    expect(response.status).toEqual(404);
  });
});
