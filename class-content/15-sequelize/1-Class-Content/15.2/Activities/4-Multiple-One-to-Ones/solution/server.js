/* 4-One to One Set Up
 *   (((SOLUTION)))
 * -/-/-/-/-/-/-/-/- */


/* INSTRUCTIONS: 
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
var sequelizeConnection = models.sequelize

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

	// 1. FIRST AWESOME THING ABOUT SEQUELIZE's 1:1 ASSOCIATIONS
	// =======================================================

	// Since Manager hasOne Store and hasOne Uniform,
	// we can create a manager and everything he "has" with one call.
	// In other words, we don't need to make three seperate functions and connect them with joins.
	// We can simply make one manager, and include the information about his store and uniform
	// just as if we were defining a single manager object.
	return models.Manager.create(
		{
			// the full name of the manager (creates an entry in the managers table)
			fullName: "Brad Lakes", 
			// the store he works in (creates an entry in the stores table)
			Store:{
				storeZip: '07748'
			}
		}, 
		// the second object in our 'create' call: options
		{
			// We need to 'include' the uniform and store models.
			// Otherwise, Sequelize won't know which fields to enter into which tables.
			include: [models.Store]
		}
	)
	// We're going to save the manager to our brad variable, so you can give him a uniform
	.then(function(manager){
		brad = manager;
	});
	/* WHEN THE SERVER RUNS THE CREATE, HERE'S WHAT GETS SENT TO MySQL
	 * 
	 * 1. INSERT INTO `Managers` (`id`,`fullName`,`createdAt`,`updatedAt`) 
	 *      VALUES (DEFAULT,'Brad Lakes','2016-06-23 17:33:38','2016-06-23 17:33:38');
	 *
	 * 2. INSERT INTO `Stores` (`id`,`storeZip`,`createdAt`,`updatedAt`,`ManagerId`) 
	 * 	   VALUES (DEFAULT,7748,'2016-06-23 17:33:38','2016-06-23 17:33:38',1);
	 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */
})


// SOLUTION FOR THE UNIFORM OBJECT
.then(function(){
	// first, we create the uniform
	return models.Uniform.create({
				color: 'blue', 
				uniformNum: 43
			})
	.then(function(uniform){
		// then we give it to brad
		brad.setUniform(uniform);
	})
})
