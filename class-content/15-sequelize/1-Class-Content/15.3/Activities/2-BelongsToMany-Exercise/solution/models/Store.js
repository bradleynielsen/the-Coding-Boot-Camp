'use strict';
module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define('Store', {
    storeZip: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // We designate Stores as belonging to many Managers
        Store.belongsToMany(models.Manager, {through: 'ManagerStore'})
      }
    }
  });
  return Store;
};