// STUDENTS: DO NOT RUN THIS FILE
// STUDENTS: DO NOT RUN THIS FILE
// STUDENTS: DO NOT RUN THIS FILE

// It will cause issues with their next two assignments.
// Only run this if you're the instructor: this will demonstrate how
// using migrations to modify database info (like column names) 
// can lead to issues.

'use strict';

module.exports = {
  // on migration, rename the fandom column in the fandoms table
  up: function (queryInterface, Sequelize) {
    queryInterface.renameColumn("fandoms", "fandom", "fanpage");

  },

  // on undo, revert the name of the column to it's original state
  down: function (queryInterface, Sequelize) {
    queryInterface.renameColumn("fandoms", "fanpage", "fandom");
  }
};
