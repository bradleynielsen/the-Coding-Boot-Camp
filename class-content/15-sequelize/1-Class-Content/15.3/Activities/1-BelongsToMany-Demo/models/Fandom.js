'use strict';
module.exports = function(sequelize, DataTypes) {
  var Fandom = sequelize.define('Fandom', {
    fandom: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // Notice: the Fandom "Belongs to Many" Users
        // The "through" option creates a UserFandom table, no model required.
        Fandom.belongsToMany(models.User, {through: 'UserFandom'});
      }
    }
  });
  return Fandom;
};