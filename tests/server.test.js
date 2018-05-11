const server = require('../src/server');

describe('Tests for basic server functionality', () => {
  test('test for ping', (done) => {
    server.inject('/ping').then((response) => {
      expect(response.payload).toEqual('pong');
      done();
    });
  });
});
