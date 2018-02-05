'use strict';
module.exports = (sequelize, DataTypes) => {
  var Books = sequelize.define('Books', {
    author: DataTypes.STRING,
    identity: DataTypes.INTEGER,
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Books;
};