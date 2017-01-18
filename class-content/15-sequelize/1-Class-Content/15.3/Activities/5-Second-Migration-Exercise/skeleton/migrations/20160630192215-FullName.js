// ANSWER ASSIGNMENT 4
// ===================

// This migration file will edit our users table.
// It will create an fullName column, 
// and rename the username column to user

// NOTE: This will NOT replace all references to "username" with "user"
// in our model, routes, and server.js, nor will it create our fullName field.
// We must do that manually.

// NOTE 2: You will run into an error if you run this solutions
// server.js file before your migrations. Running the app
// will create the fullName column in the users table.
// If you attempt to migrate afterwards, you'll be telling
// Sequelize to create a column that already exists.
// Remember: it's a best practice to run your migrations before your app.


module.exports = {
  // migration
  up: function (queryInterface, Sequelize) {
    // add a fullName column, do not allow null
    return queryInterface.addColumn(
      'users',
      'fullName',
      {
        type: Sequelize.STRING,
        notNull: true
      }
    )
  },
  

  // revert migration
  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'fullName');
  }
};
