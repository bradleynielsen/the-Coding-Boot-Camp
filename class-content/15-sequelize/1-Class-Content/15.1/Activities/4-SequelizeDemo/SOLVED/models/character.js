// Character Model
// ===============
'use strict';

// EXPORT THIS MODULE TO INDEX.JS
module.exports = function(sequelize, DataTypes) {
  // the model is Character, defined in sequelize
  var Character = sequelize.define('Character', {

    // the routeName gets saved as a string
    routeName: DataTypes.STRING,
    // the name of the character (a string)
    name: DataTypes.STRING,
    // the character's role (a string)
    role: DataTypes.STRING,
    // the character's age (a string)
    age: DataTypes.INTEGER,
    // and the character's force poits (an int)
    forcePoints: DataTypes.INTEGER
  }, {
    // you'll be using this in the next class. Ignore it for now
    classMethods: {
      associate: function(models) {
        // IGNORE THIS FOR NOW
      }
    }
  });
  return Character;
};