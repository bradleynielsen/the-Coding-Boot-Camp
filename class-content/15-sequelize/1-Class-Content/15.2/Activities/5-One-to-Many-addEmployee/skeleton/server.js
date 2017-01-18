/* 5-One to One Set Up
 * -/-/-/-/-/-/-/-/- */


/* INSTRUCTIONS: 
 *
 * A) Create an Emplyee model that matches the create calls at the bottom of this file.
 * B) Associate Employee with Manager using hasMany. 
 *
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

	/* WHEN THE SERVER RUNS THE CREATE, HERE'S WHAT GETS SENT TO MySQL
	 * 
	 * 1. INSERT INTO `Employees` (`id`,`fullName`,`role`,`createdAt`,`updatedAt`) 
	 *		VALUES (DEFAULT,'Mike Michaels','Human Resources','2016-06-24 15:02:55','2016-06-24 15:02:55');
	 *
	 * 2. UPDATE `Employees` SET `ManagerId`=1,`updatedAt`='2016-06-24 15:02:55' 
	 *		WHERE `id` IN (1);
	 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */
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

	/* WHEN THE SERVER RUNS THE CREATE, HERE'S WHAT GETS SENT TO MySQL
	 * 
	 * 1. INSERT INTO `Employees` (`id`,`fullName`,`role`,`createdAt`,`updatedAt`) 
	 *		VALUES (DEFAULT,'Michelle Shelly','Community Relations','2016-06-24 15:02:55','2016-06-24 15:02:55');
	 *
	 * 2. UPDATE `Employees` SET `ManagerId`=1,`updatedAt`='2016-06-24 15:02:55' 
	 *		WHERE `id` IN (2)
	 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */
})

