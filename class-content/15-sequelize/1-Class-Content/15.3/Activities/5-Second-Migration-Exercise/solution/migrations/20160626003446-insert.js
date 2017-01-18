// This migration fil performs a bulk create to populate our database.
// This could be useful for testing purposes.

'use strict';

var models = require("../models");

module.exports = {
  // on migration...
  up: function (queryInterface, Sequelize) {
    // bulk insert these entries using our model
    return models.Fandom.bulkCreate(
      [
        {fandom: "Power Rangers"},
        {fandom: "Breaking Bad"},
        {fandom: "The Simpsons"},
        {fandom: "Star Wars"},
        {fandom: "Star Trek"}
      ]
    )
  },

  // on undo...
  down: function (queryInterface, Sequelize) {
    // remove all instances of these fandoms from the table
    return models.Fandom.destroy({where:{fandom: [
        "Power Rangers",
        "Breaking Bad",
        "The Simpsons",
        "Star Wars",
        "Star Trek"
    ]}})
  }
};
