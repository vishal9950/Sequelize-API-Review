const check = require('./check');
const getAllBooks = require('./getAllBooks');
const getRatings = require('./getRatings');
const storeBooks = require('./storeBooks');

module.exports = [].concat(check).concat(getAllBooks).concat(getRatings).concat(storeBooks);
