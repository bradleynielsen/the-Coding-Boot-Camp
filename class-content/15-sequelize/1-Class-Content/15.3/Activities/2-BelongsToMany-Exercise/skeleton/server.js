/* 2-BELONGS-TO-MANY-EXERCISE
 * -/-/-/-/-/-/-/-/-/-/-/-/-/ */


 /* STUDENTS: 
  *
  * Create a MySQL database called store2.
  *
  * Your work lies in three files: this one (server.js), 
  * as well the Manager and Store models.
  * 
  * 1. In the models, associate the Store and Manager models with belongsToMany methods.
  * 	 Also, associate the Manager model with the Uniform model using hasOne.
  *
  * 2. At the bottom of this file, create two stores 
  *    and link whichever managers you would like to them.
  *		 NOTE: For your convenience, we already made the managers.
  * 
  * 3. At the bottom of this file, create two express routes.
  *		a: one grabs every manager in a store.
  *		b: one grabs every store that a particular manager works in.
  *    Serve your data to the client as a json object.
  *
  *  Good Luck!
  * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/- */


// DEPENDENCIES
// ============

// Initialize Express app
var express = require('express');
var app = express();


// and we bring in our models folder. This brings in the model's object, as defined in index.js
var models  = require('./models');

// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelize;








// TIP: rather than using findOne to instantiate a manager, 
// feel free to use these global variables, as they will contain
// the instance of the manager by the time you hit the bottom of this file.
var brad;
var shelly;
var avril;






// PREPARE OUR TABLES 
// =======================================================================


// We run this query so that we can drop our tables even though they have foreign keys
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// sync the tables
.then(function(){
	return sequelizeConnection.sync({force:true})
})





/* WE CREATE OUR MANAGAERS IN THIS SECTION
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */
// we'll create our managers, one after another with .then (to make sure we don't run aysnchronously)

// only when those tables are made, do we want to run the next set of functions
.then(function(){

	
	return models.Manager.create(
		{
			// the full name of the manager (creates an entry in the managers table)
			fullName: "Brad", 
			// the store he works in (creates an entry in the stores table)
			Uniform: {
				color: "teal",
				uniformNum: 983
			}
		}, 
		// the second object in our 'create' call: options
		{
			// We need to 'include' the uniform 
			// Otherwise, Sequelize won't know which fields to enter into which tables.
			include: [models.Uniform]
		}
	)
	// We're going to save the manager to our brad variable, so you can give him a uniform
	.then(function(manager){
		return brad = manager;
	})
})
// And now our next manager
.then(function(){
	
	return models.Manager.create(
		{
			// the full name of the manager (creates an entry in the managers table)
			fullName: "Shelly", 

			Uniform: {
				color: "red",
				uniformNum: 342
			}
		}, 
		// the second object in our 'create' call: options
		{
			// We need to 'include' the uniform model
			// Otherwise, Sequelize won't know which fields to enter into which tables.
			include: [models.Uniform]
		}
	)
	// We're going to save the manager to our brad variable, so you can give him a uniform
	.then(function(manager){
		return shelly = manager;
	})
})
// And now our final manager
.then(function(){
	
	return models.Manager.create(
		{
			// the full name of the manager (creates an entry in the managers table)
			fullName: "Avril", 

			Uniform: {
				color: "orange",
				uniformNum: 329
			}
		}, 
		// the second object in our 'create' call: options
		{
			// We need to 'include' the uniform model
			// Otherwise, Sequelize won't know which fields to enter into which tables.
			include: [models.Uniform]
		}
	)
	// We're going to save the manager to our brad variable, so you can give him a uniform
	.then(function(manager){
		return avril = manager;
	})
})
// ====================
// END MANAGER CREATION
// ====================



// STUDENTS: Create your stores and link your managers to them here:
// =================================================================


// now let's create some stores, and place multiple managers inside of them
.then(function(){
	
	// TODO
	// ===
	// Create a store, and add managers to it

})

.then(function(){
	
	// TODO
	// ====
	// Create a second store, and add managers to it

})



// STUDENTS: Create your GET requests here
// =================================================================


// simple homepage
app.get('/', function(req, res){
	res.send(
		"<h1>Test your routes!</h1>" +
		"<h2> visit /Shelly/stores and /07748/managers</h2>"
	);
})




app.get('/:zip/managers', function(req, res){

	// TODO:
	// =====
	// using findOne and getManagers
	// show the user every manager from a particular store, given a zipcode
})


app.get('/:manager/stores', function(req, res){

	// TODO:
	// =====
	// using findOne and getStores
	// show the user every store that a manager works at, given the manager's name
})





// listen on port 3000
app.listen(3000, function(){
	console.log("Listening on port 3000")
})