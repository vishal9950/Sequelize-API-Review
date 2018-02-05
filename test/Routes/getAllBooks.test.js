const Server = require('../../server');

describe('Get all books: ', () => {
  test('Should return status code 200', (done) => {
    Server.inject('/getAllBooks', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('Should return the result', (done) => {
    const testObj = { books: [{ Author: 'J K Rowling', id: 1, Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)' }, { Author: 'J K Rowling', id: 2, Name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)' }, { Author: 'Sidney Sheldon', id: 8, Name: 'If Tomorrow Comes (Tracy Whitney Series, #1)' }, { Author: 'Sidney Sheldon', id: 10, Name: 'Tell Me Your Dreams' }, { Author: 'J K Rowling', id: 3, Name: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)' }, { Author: 'J K Rowling', id: 4, Name: 'Harry Potter and the Goblet of Fire (Harry Potter, #4)' }, { Author: 'Sidney Sheldon', id: 9, Name: 'Master of the Game' }, { Author: 'Sidney Sheldon', id: 11, Name: 'The Other Side of Midnight (Midnight #1)' }, { Author: 'J K Rowling', id: 5, Name: 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)' }, { Author: 'J K Rowling', id: 6, Name: 'Harry Potter and the Half-Blood Prince (Harry Potter, #6)' }, { Author: 'J K Rowling', id: 7, Name: 'Harry Potter and the Deathly Hallows (Harry Potter, #7)' }, { Author: 'Sidney Sheldon', id: 12, Name: 'Rage of Angels' }] };
    Server.inject('/getAllBooks', (response) => {
      expect(response.result).toEqual(testObj);
      done();
    });
  });
});
