const https = require('https');

module.exports = [
  {
    path: '/getRatings',
    method: 'GET',
    handler: (response, reply) => {
      https.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks', (response) => {
        response.on('data', (data) => {
          const result = JSON.parse(data);
          //   console.log(res);
          const promise1 = new Promise((resolve) => {
            https.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${result.books[0].id}`, (resp) => {
              resp.on('data', (data1) => {
                result.books[0].rating = JSON.parse(data1).rating;
                resolve(result.books[0]);
              });
            });
          });

          const promise2 = new Promise((resolve) => {
            https.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${result.books[1].id}`, (resp) => {
              resp.on('data', (data1) => {
                result.books[1].rating = JSON.parse(data1).rating;
                resolve(result.books[1]);
              });
            });
          });

          const promise3 = new Promise((resolve) => {
            https.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${result.books[2].id}`, (resp) => {
              resp.on('data', (data1) => {
                result.books[2].rating = JSON.parse(data1).rating;
                resolve(result.books[2]);
              });
            });
          });

          const promise4 = new Promise((resolve) => {
            https.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${result.books[3].id}`, (resp) => {
              resp.on('data', (data1) => {
                result.books[3].rating = JSON.parse(data1).rating;
                resolve(result.books[3]);
              });
            });
          });

          const promise5 = new Promise((resolve) => {
            https.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${result.books[4].id}`, (resp) => {
              resp.on('data', (data1) => {
                result.books[4].rating = JSON.parse(data1).rating;
                resolve(result.books[4]);
              });
            });
          });

          const promise6 = new Promise((resolve) => {
            https.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${result.books[5].id}`, (resp) => {
              resp.on('data', (data1) => {
                result.books[5].rating = JSON.parse(data1).rating;
                resolve(result.books[5]);
              });
            });
          });

          const promise7 = new Promise((resolve) => {
            https.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${result.books[6].id}`, (resp) => {
              resp.on('data', (data1) => {
                result.books[6].rating = JSON.parse(data1).rating;
                resolve(result.books[6]);
              });
            });
          });

          const promise8 = new Promise((resolve) => {
            https.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${result.books[7].id}`, (resp) => {
              resp.on('data', (data1) => {
                result.books[7].rating = JSON.parse(data1).rating;
                resolve(result.books[7]);
              });
            });
          });

          const promise9 = new Promise((resolve) => {
            https.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${result.books[8].id}`, (resp) => {
              resp.on('data', (data1) => {
                result.books[8].rating = JSON.parse(data1).rating;
                resolve(result.books[8]);
              });
            });
          });

          const promise10 = new Promise((resolve) => {
            https.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${result.books[9].id}`, (resp) => {
              resp.on('data', (data1) => {
                result.books[9].rating = JSON.parse(data1).rating;
                resolve(result.books[9]);
              });
            });
          });

          const promise11 = new Promise((resolve) => {
            https.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${result.books[10].id}`, (resp) => {
              resp.on('data', (data1) => {
                result.books[10].rating = JSON.parse(data1).rating;
                resolve(result.books[10]);
              });
            });
          });

          const promise12 = new Promise((resolve) => {
            https.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${result.books[11].id}`, (resp) => {
              resp.on('data', (data1) => {
                result.books[11].rating = JSON.parse(data1).rating;
                resolve(result.books[11]);
              });
            });
          });

          Promise.all([promise1, promise2, promise3, promise4, promise5, promise6, promise7, promise8, promise9, promise10, promise11, promise12]).then((values) => {
            reply(values);
          });
        });
      });
    },
  },
];
