// ANSWER ASSIGNMENT 5
// ===================

// this creates a bulk insert to users 
// while associating them with fandoms
'use strict';

// User model (to create our bulk insert)
var User = require('../models')["User"];

module.exports = {
  up: function (queryInterface, Sequelize) {
    return User.bulkCreate([
      {username: "George", fullName:'George Michael'},
      {username: "Frank", fullName:'Frank Sinatra'},
      {username: "Maya", fullName:'Maya Angelou'},
      {username: "Maria", fullName:'Maria Maria'},
      {username: "Alison", fullName:'Alison Slowdive'}
    ])
  },

  down: function (queryInterface, Sequelize) {
    // remove all instances of these fandoms from the table
    return User.destroy({where:{username: [
        "George",
        "Frank",
        "Maya",
        "Maria",
        "Alison"
    ]}})
  }
}
