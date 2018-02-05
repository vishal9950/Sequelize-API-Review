const Server = require('../../server');

describe('Get all books: ', () => {
  test('Shoul', (done) => {
    Server.inject('/getAllBooks', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
