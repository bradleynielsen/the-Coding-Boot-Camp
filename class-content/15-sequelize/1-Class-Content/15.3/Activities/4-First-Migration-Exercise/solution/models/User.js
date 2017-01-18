'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    // TODO
    // ====
    // Add the fullName attribute to the user model.
    // Specify that it's not null
    fullName: {
      type: DataTypes.STRING,
      notNull: true
    }
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