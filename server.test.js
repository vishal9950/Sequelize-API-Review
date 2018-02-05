const Server = require('./server');

describe('Test server: ', () => {
  test('should return statusCode 200: ', (done) => {
    Server.inject('/', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
