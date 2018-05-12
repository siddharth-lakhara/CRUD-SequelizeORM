const Models = require('../models');
const server = require('../src/server');

beforeAll((done) => {
  const options1 = {
    url: '/users',
    method: 'POST',
    payload: JSON.stringify({ userName: 'user1' }),
  };
  const options2 = {
    url: '/users',
    method: 'POST',
    payload: JSON.stringify({ userName: 'user2' }),
  };

  Models.users.destroy({ where: {} }).then(() => {
    server.inject(options1).then(() => {
      server.inject(options2).then(() => {
        done();
      });
    });
  });
});

// describe('tests for create', () => {
//   test('create a new user', (done) => {
//     const options = {
//       url: '/users',
//       method: 'POST',
//       payload: JSON.stringify({ userName: 'testUser' }),
//     };
//     server.inject(options).then((res) => {
//       expect(res.payload).toEqual('User successfully created');
//       done();
//     });
//   });

//   test('rejects a request if userName is not provided', (done) => {
//     const options = {
//       url: '/users',
//       method: 'POST',
//       payload: JSON.stringify({}),
//     };
//     server.inject(options).then((response) => {
//       payload = JSON.parse(response.payload);
//       // console.log(payload);
//       expect(payload.statusCode).toBe(400);
//       expect(payload.message).toEqual('userName field not found');
//       done();
//     });
//   });

//   test('Does not add an existing user again', (done) => {
//     const options = {
//       url: '/users',
//       method: 'POST',
//       payload: JSON.stringify({ userName: 'testUser' }),
//     };
//     server.inject(options).then((res) => {
//       expect(res.payload).toEqual('User already exists');
//       done();
//     });
//   });
// });

// describe('test for read', () => {
//   test('Reads all users successfully', (done) => {
//     server.inject('/users').then((results) => {
//       const payload = JSON.parse(results.payload);
//       Object.keys(payload).map((elem) => {
//         expect(payload[elem].userName).toBeDefined();
//       });
//     });
//     done();
//   });
// });

// describe('test for update', () => {
//   test('Updates a user already in DB', (done) => {
//     const options = {
//       url: '/update',
//       method: 'POST',
//       payload: JSON.stringify({ oldName: 'user1', newName: 'userNew' }),
//     };
//     server.inject(options).then((response) => {
//       expect(response.payload).toEqual('User succesfully updated');
//       done();
//     });
//   });

//   test('Returns error if user is not found', (done) => {
//     const options = {
//       url: '/update',
//       method: 'POST',
//       payload: JSON.stringify({ oldName: 'someUser', newName: 'userNew' }),
//     };
//     server.inject(options).then((response) => {
//       expect(response.payload).toEqual('User not found');
//       done();
//     });
//   });

//   test('rejects request if old userName is not provided', (done) => {
//     const options = {
//       url: '/update',
//       method: 'POST',
//       payload: JSON.stringify({ newName: 'userNew' }),
//     };
//     server.inject(options).then((response) => {
//       const payload = JSON.parse(response.payload);
//       expect(payload.message).toEqual('oldName missing in request');
//       expect(payload.statusCode).toBe(400);
//       done();
//     });
//   });

//   test('rejects request if new userName is not provided', (done) => {
//     const options = {
//       url: '/update',
//       method: 'POST',
//       payload: JSON.stringify({ oldName: 'userNew' }),
//     };
//     server.inject(options).then((response) => {
//       const payload = JSON.parse(response.payload);
//       expect(payload.message).toEqual('newName missing in request');
//       expect(payload.statusCode).toBe(400);
//       done();
//     });
//   });
// });

describe('test for delete operation', () => {
  test('Delete a user present in DB', (done) => {
    const options = {
      url: '/delete',
      method: 'POST',
      payload: JSON.stringify({ userName: 'user2' }),
    };
    server.inject(options).then((response) => {
      expect(response.payload).toEqual('User successfully deleted');
      done();
    });
  });

  test('Returns error if user is not found', (done) => {
    const options = {
      url: '/delete',
      method: 'POST',
      payload: JSON.stringify({ userName: 'someUser' }),
    };
    server.inject(options).then((response) => {
      expect(response.payload).toEqual('User not found');
      done();
    });
  });

  test('rejects a request if userName is not provided', (done) => {
    const options = {
      url: '/delete',
      method: 'POST',
      payload: JSON.stringify({ }),
    };
    server.inject(options).then((response) => {
      const payload = JSON.parse(response.payload);
      expect(payload.message).toEqual('userName missing in request');
      expect(payload.statusCode).toBe(400);
      done();
    });
  });
});
