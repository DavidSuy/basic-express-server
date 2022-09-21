'use strict';

const app = require('../src/server');
const supertest = require('supertest');

const request = supertest(app);

describe('Testing Validator', () => {
  test('Should respond with 200 if the name is in teh query string', async () => {
    const response = await request.get('/person?name=David');
    // console.log(response.body.name);
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('David');
  });
  test('Should respond with 500 if no name in the query string', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
  });
});
