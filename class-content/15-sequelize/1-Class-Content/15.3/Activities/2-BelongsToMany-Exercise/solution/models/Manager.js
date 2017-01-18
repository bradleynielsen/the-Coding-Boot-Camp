'use strict';
module.exports = function(sequelize, DataTypes) {
  var Manager = sequelize.define('Manager', {
    fullName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // We designate Managers as having many Stores and one Uniform.
        Manager.belongsToMany(models.Store, {through: 'ManagerStore'});
        Manager.hasOne(models.Uniform);
      }
    }
  });
  return Manager;
};