'use strict';
module.exports = (sequelize, DataTypes) => {
  var bookdetails = sequelize.define('bookdetails', {
    author: DataTypes.STRING,
    iden: DataTypes.INTEGER,
    name: DataTypes.STRING,
    rating: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return bookdetails;
};