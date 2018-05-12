const Models = require('../models');
const server = require('../src/server');

beforeAll(() => {
  Models.users.destroy({ where: {} });
});

describe('tests for create', () => {
  test('create a new user', (done) => {
    const options = {
      url: '/users',
      method: 'POST',
      payload: JSON.stringify({ userName: 'testUser' }),
    };
    server.inject(options).then((res) => {
      expect(res.payload).toEqual('User successfully created');
      done();
    });
  });

  test('rejects a request if userName is not provided', (done) => {
    const options = {
      url: '/users',
      method: 'POST',
      payload: JSON.stringify({}),
    };
    server.inject(options).then((response) => {
      payload = JSON.parse(response.payload);
      // console.log(payload);
      expect(payload.statusCode).toBe(400);
      expect(payload.message).toEqual('userName field not found');
      done();
    });
  });

  test('Does not add an existing user again', (done) => {
    const options = {
      url: '/users',
      method: 'POST',
      payload: JSON.stringify({ userName: 'testUser' }),
    };
    server.inject(options).then((res) => {
      expect(res.payload).toEqual('User already exists');
      done();
    });
  });
});

describe('test for read', () => {
  test('Reads all users successfully', (done) => {
    server.inject('/users').then((results) => {
      const payload = JSON.parse(results.payload);
      Object.keys(payload).map((elem) => {
        expect(payload[elem].userName).toBeDefined();
      });
    });
    done();
  });
});

// describe('test for update', () => {
//   test('Updates a user already in DB');

//   test('Returns error if user is not found');

//   test('rejects request if old userName is not provided');

//   test('rejects request if new userName is not provided');
// });

// describe('test for delete operation', () => {
//   test('Delets a user present in DB');

//   test('Returns error if user is not found');

//   test('rejects a request if userName is not provided');
// });
