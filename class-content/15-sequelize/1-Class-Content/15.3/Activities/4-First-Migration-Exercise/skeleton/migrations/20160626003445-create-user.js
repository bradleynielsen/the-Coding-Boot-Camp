// INITIAL MIGRATION
// This is the 0-state of the User table. 
// When run, the table will be created.

// This is also what sequelize db:migrate will refer to 
// as the base schema. All undos revert to this.

'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
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
    // NOTE: This section of code needs to be added to the migration file
    // since we are using a BelongsToMany relationship to generate a new table.

    // By temporarily removing foreign key checks 
    // and then dropping the UserFandom table
    // we can also drop the Users table
    queryInterface.sequelize.query(
      'SET FOREIGN_KEY_CHECKS = 0;', {raw: true}
    ).then(function(results){
      queryInterface.sequelize.query(
        'DROP TABLE IF EXISTS UserFandom'
      )
    })
    .then(function(){
      return queryInterface.dropTable('Users');
    })
  }
};

// Remember: UserFandom has no model, and thus no default migration.
// However, it does have a foreign key relationship with Users and Fandom.
// Using the down method to delete Users without first deleting UserFandom 
// will hang up the migration process.