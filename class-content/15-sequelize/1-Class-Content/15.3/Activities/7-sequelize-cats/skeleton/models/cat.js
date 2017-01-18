"use strict";

module.exports = function(sequelize, DataTypes) {
  var Cat = sequelize.define("Cat", {
    name: DataTypes.STRING,
    sleepy: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, {
    // don't add the timestamp attributes (updatedAt, createdAt)
      //timestamps: false,

    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
      //paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true,

    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: 'cats',

    classMethods: {
      associate: function(models) {
        Cat.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });

  return Cat;
};
