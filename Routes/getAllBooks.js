const https = require('https');

module.exports = [
  {
    path: '/getAllBooks',
    method: 'GET',
    handler: (response, reply) => {
      https.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks', (response) => {
        response.on('data', (data) => {
          const res = JSON.parse(data);
          reply(res);
        });
      });
    },
  },
];
