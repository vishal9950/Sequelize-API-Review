const check = require('./check');
const getAllBooks = require('./getAllBooks');
const getRatings = require('./getRatings');

module.exports = [].concat(check).concat(getAllBooks).concat(getRatings);
