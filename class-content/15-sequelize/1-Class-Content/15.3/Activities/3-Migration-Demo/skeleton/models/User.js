'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // Notice: the User "Belongs to Many" Fandoms
        User.belongsToMany(models.Fandom, {through: 'UserFandom'});
      }
    }
  });
  return User;
};