'use strict';
module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define('Store', {
    storeZip: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      	// TODO
      	// ====
      	// Add a belongs-to-many assocation with the Manager model
      }
    }
  });
  return Store;
};