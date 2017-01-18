/* 2-BELONGS-TO-MANY-EXERCISE
 *     ((( Solution )))
 * -/-/-/-/-/-/-/-/-/-/-/-/-/ */

 /* STUDENTS: 
  *
  * Create a MySQL database called store2.
  *
  * Your work lies in three files: this one (server.js), 
  * as well the Manager and Store models.
  * 
  * 1. In the models, associate the Store and Manager models with belongsToMany methods.
  *		 Also, associate the Manager model with the Uniform model using hasOne
  * 
  * 2. At the bottom of this file, create two stores 
  *    and link whichever managers you would like to them
  *		 NOTE: For your convenience, we've already made the managers.
  * 
  * 3. At the bottom of this file, create two express routes.
  *		     a: one grabs every manager in a store.
  *		     b: one grabs every store that a particular manager works in.
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
var sequelizeConnection = models.sequelize







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


// SOLUTION TO CREATING STORES


// First possible solution: create the store then us addManagers
.then(function(){

	// use sequelize to add a store to the database
	return models.Store.create({
		storeZip: '07730'
	})
	// then using the store we saved, use the addManagers method 
	// that belongsToMany bestowed it with
	.then(function(store){
		return store.addManagers([brad, shelly, avril]);
	})
})


// Second possible solution: create the store, 
// then use the manager's addStore
.then(function(){
	// use sequelize to add a store to the database
	return models.Store.create({
		storeZip: '07748'
	})
	// then using the store we saved, use the addManagers method 
	// that belongsToMany bestowed it with
	.then(function(store){
		return shelly.addStore(store);
	})
})




// EXPRESS ROUTE SOLUTIONS
// =======================

// simple homepage
app.get('/', function(req, res){
	res.send(
		"<h1>Test your routes!</h1>" +
		"<h2> visit /Shelly/stores and /07748/managers</h2>"
	);
})



// show the user every manager from a particular store, given a zipcode
app.get('/:zip/managers', function(req, res){

	// save the zip code from the parameters of the request
	var zip = req.params.zip;

	// reach into the store model and instance the store that matches the zip code
	models.Store.findOne({where: { storeZip: zip} })
	// when that's done, pass the store in the callback
	.then(function(store){
		// then retrieve the managers from the store, 
		// using the belongToMany() getAssociations method 
		return store.getManagers()
		// us the managers in the next callback 
		.then(function(managers){
			// and send the managers to the client as json
			return res.json(managers);
		})
	})
})

// show the user every store that a manager works at, given the manager's name
app.get('/:manager/stores', function(req, res){

	// in case the user types a lowercase name in the url, capitalize that name
	// and save it to a name var
	var name = req.params.manager[0].toUpperCase() + req.params.manager.substring(1);

	// reach into the Manager model use instantiate the manager that matches that name
	models.Manager.findOne({where: { fullName: name} })
	// pass the manager in a callback function
	.then(function(manager){
		// then get that manager's stores
		// using the belongToMany() getAssociations method 
		return manager.getStores()
		// use those stores in a callback function
		.then(function(stores){
			// and send the stores to the client as json
			return res.json(stores);
		})
	})
})


// listen on port 3000
app.listen(3000, function(){
	console.log("Listening on port 3000")
})