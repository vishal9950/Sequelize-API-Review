const Server = require('../../server');

describe('Get ratings: ', () => {
  test('Should return status code 200', (done) => {
    Server.inject('/getRatings', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
