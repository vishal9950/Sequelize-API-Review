module.exports = [
  {
    path: '/',
    method: 'GET',
    handler: (response, reply) => {
      console.log('Working!');
      reply('Working');
    },
  },
];
