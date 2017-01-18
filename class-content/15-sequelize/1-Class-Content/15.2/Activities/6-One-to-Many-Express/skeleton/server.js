/* 6-ONE TO MANY EXPRESS
 * -/-/-/-/-/-/-/-/- */


/* INSTRUCTIONS: 
 *
 * Your work lies at the bottom of this file. 
 * 
 * Using express routes in tandem with hasOne's and hasMany's accessor methods, 
 * you will grab brad's uniform and his employees and serve them to the client as raw json.
 * 
 * How do you do that?
 * 1) consult the documentation here
 *		a. hasOne: http://docs.sequelizejs.com/en/latest/api/associations/has-one/
 * 		b. hasMany: http://docs.sequelizejs.com/en/latest/api/associations/has-many/
 *
 *
 * 2) If you figure out what methods you need and how they work, help any neighbors who do not
 *		have the solution. Offer assistance to at least three of your neighbors.
 *		If you solve the problem but your two nearest neighbors haven't, 
 *		then your assignment is not complete.
 *
 *
 * 3) If you find yourself stuck, then ask for assistance 
 *		from either your instructor, a TA or a fellow student. 
 *
 *
 * Note: The point of this exercise is not only to teach how getAssociation(s) work,
 * but to train you to analyze a high-level problem and find real solutions
 * with documentation and communication.
 *
 * Good luck!
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */




// DEPENDENCIES
// ============

// Initialize Express app
var express = require('express');
var app = express();


// and we bring in our models folder. This brings in the model's object, as defined in index.js
var models  = require('./models');

// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelize;

// create empty variables to place our manager, brad, in
var brad;


// PREPARE OUR TABLES 
// =======================================================================


// We run this query so that we can drop our tables even though they have foreign keys
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// reach into our models object, and create each table based on the associated model.
// note: force:true drops the table if it already exists

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
				storeZip: 07748
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
		return brad = manager;
	});
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
		return brad.setUniform(uniform);
	})
})


// Let's create some employees
.then(function(){

	// here's mike!
	return models.Employee.create({
		fullName: "Mike Michaels",
		role: "Human Resources",
	})
	// we chain mike's create with .then, pass his name as an arg,
	.then(function(mike){
		// then call our manager's addAssociation method.
		// sequelize gives him addEmployee (since he hasMany employees)
		return brad.addEmployee(mike);
	})
})

// now let's add one more employee, to show that we can associate more than one with brad
.then(function(){

	// now, let's create some employees
	// here's mike!
	return models.Employee.create({
		fullName: "Michelle Shelly",
		role: "Community Relations",
	})
	// like last time, we chain a then with michelle passed as the arg
	.then(function(michelle){
		return brad.addEmployee(michelle);
	})
})



// ROUTES
// ======

// simple homepage
app.get('/', function(req, res){
	res.send(
		"<h1>Remember your routes!</h1>" +
		"<h2>/uniform and /employees</h2>"
	);
})



// TODO: 
// =====
// Inside an express get route, grab brad's uniform, send it to the client as json 








// TODO:
// ===== 
// Inside of an express get route, grab brad's employees with one function, 
// and send them to client as json







// listen on port 3000
app.listen(3000, function(){
	console.log("Listening on port 3000")
})