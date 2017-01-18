/* 4-One to One Set Up
 * -/-/-/-/-/-/-/-/- */


/* INSTRUCTIONS: 
 *
 *
 * A) Create a model for the managers' uniforms.
 * B) Edit the manager model to associate it with both the store and the uniform models 
 * C) Refer to the TODOs in the queries
 *
 *
 * Note: This is challenging. If you don't finish in time, don't sweat it. 
 * We'll go over the answers together.
 *
 * ONE MORE THING: don't forget to 'CREATE DATABASE store1;' in MySQL.

 * Good luck!
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */





// DEPENDENCIES
// ============
// only one dependency: our models folder. Index.js handles the rest
var models  = require('./models');

// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelize;

// create empty variables to place our manager, brad, in
var brad;


// PREPARE OUR TABLES 
// =======================================================================


// We run this query so that we can drop our tables even though they have foreign keys
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// make our tables
// note: force:true drops the table if it already exists
.then(function(){
	return sequelizeConnection.sync({force:true})
})

// only when those tables are made, do we want to run the next set of functions
.then(function(){

	return models.Manager.create(
		{
			// TODO
			// ====
			// We want this query create brad and his store.
			// Write out brad's Manager properties,
			// and nest his store and its properties, as well.

		}, 
		// the second object in our 'create' call: options
		{
			// TODO
			// ====
			// use the option that "include"s (that's a hint) the Store model in our create call
		}
	)
	// We're going to save the manager to our brad variable, so you can give him a uniform
	.then(function(manager){
		brad = manager;
	});
})


// SOLUTION FOR THE UNIFORM OBJECT
.then(function(){
	// first, we create the uniform
	return models.Uniform.create({
			
		// TODO!
		// =====
		// Enter in the fields for your uniform
	})
	.then(function(uniform){
		
		// TODO!
		// =====
		// Associate the uniform with brad using the method hasOne() gave to every Manager instance

	})
})
