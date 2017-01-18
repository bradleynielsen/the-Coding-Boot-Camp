// INITIAL MIGRATION
// This is the 0-state of the Fandom table. 
// When run, the table will be created.

// This is also what sequelize db:migrate will refer to 
// as the base schema. All undos revert to this.

'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Fandoms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fandom: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Fandoms');
  }
};

// NOTE: while it is possible to manually make this file,
// it's much less redundant to use the sequelize cli.
// That way, when you make a model in the console,
// it will create not only a model,
// but a matching migration file.