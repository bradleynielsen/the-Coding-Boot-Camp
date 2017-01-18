/* 4-One to One Set Up
 * -/-/-/-/-/-/-/-/- */



/* INSTRUCTOR: Run through this file and demonstrate these key parts in this order:
 *
 * A) What's going on in the models folder (Show class all three models and ESPECIALLY index.js)
 * B) How we query the server with our associated models, as shown below.
 * C) How we synchronize the models at the beginning of our server.js
 *
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */



// DEPENDENCY
// ============
// only one dependency: our models folder. index.js handles the rest
var models  = require('./models');

// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelize;


// GLOBAL VARIABLES
// ================
// our manager, brad, will end up in this global variable
var brad;



// PREPARE OUR TABLES (don't forget to 'CREATE DATABASE store1;' in MySQL)
// =======================================================================

// We run this query so that we can drop our tables even though they have foreign keys
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')


// a) sync our tables
.then(function(){
	return sequelizeConnection.sync({force:true})
})

// only when those tables are made, do we want to run the next set of functions
.then(function(){



	// 1. FIRST AWESOME THING ABOUT SEQUELIZE's 1:1 ASSOCIATIONS
	// =======================================================

	// Since Manager hasOne Store
	// we can create a manager and everything he "has" with one call.
	// In other words, we don't need to make a bunch of rows and later 
	// connect all of them with joins.

	// We can simply make one manager, and include everything 
	// from the other tables that he owns, just as if 
	// we were defining a single manager object.
	return models.Manager.create(
		{
			// the full name of the manager (creates an entry in the managers table)
			fullName: "Brad Lakes", 
			// the store he works in (creates an entry in the stores table)
			Store:{
				storeZip: 07748
			}, 
		}, 

		// the second object in our 'create' call: options
		{
			// We need to 'include' the uniform and store models.
			// Otherwise, Sequelize won't know which fields to enter into which tables.
			include: [models.Store]
		}
	)
	// using .then after create, we can save the manager we created 
	// to the global brad variable
	.then(function(manager){
		brad = manager;
	});

	/* WHEN THE SERVER RUNS THE CREATE, HERE'S WHAT GETS SENT TO MySQL
	 * 
	 * 1. INSERT INTO `Managers` (`id`,`fullName`,`createdAt`,`updatedAt`) 
	 *      VALUES (DEFAULT,'Brad Lakes','2016-06-23 17:33:38','2016-06-23 17:33:38');
	 *
	 * 2. INSERT INTO `Uniforms` (`id`,`color`,`uniformNum`,`createdAt`,`updatedAt`,`ManagerId`) 
	 *     VALUES (DEFAULT,'blue',43,'2016-06-23 17:33:38','2016-06-23 17:33:38',1);
	 *
	 * 3. INSERT INTO `Stores` (`id`,`storeZip`,`createdAt`,`updatedAt`,`ManagerId`) 
	 * 	   VALUES (DEFAULT,7748,'2016-06-23 17:33:38','2016-06-23 17:33:38',1);
	 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */
})


// we're going to connect the next queries with a then.
// Afterall, we can't edit database info if it doesn't exist (the pains of being asynchronous).
.then(function(){




	// 2. SECOND AWESOME THING ABOUT SEQUELIZE's 1:1 ASSOCIATIONS
	// ==========================================================

	// Say you already entered brad in with his store. 
	// But now we just opened a new store, and brad's got his eye on it (it's in his hometown). 
	// We can easily add the new store to our database,
	// and then give brad the new store while removing from the old one.

	// first, we create the store
	return models.Store.create({
		storeZip: '07748'
	})
	// with this .then function, sequelize associates the first arg in the callback
	// with the store we just created. we then pass that into the next function.
	.then(function(store){
		// where did setStore come from? Our Association
		// When you associate models with hasOne, you automatically create set[ModelNameHere].
		// just pass the first arg of create's callback here, 
		// and you'll associate the manager with the new uniform.  
		brad.setStore(store);
	})

	/* THOSE 4 SHORT LINES OF CODE DID ALL OF THIS IN MySQL
	 *
	 * models.Store.create({ keys and vals }):
	 * INSERT INTO `Stores` (`id`,`storeZip`,`createdAt`,`updatedAt`) 
	 * 		VALUES (DEFAULT,'07748','2016-06-23 23:39:27','2016-06-23 23:39:27');
	 *
	 * brad.setStore(store):
	 * 1. SELECT `id`, `storeZip`, `createdAt`, `updatedAt`, `ManagerId` 
	 *		FROM `Stores` AS `Store` WHERE `Store`.`ManagerId` = 1 LIMIT 1;
	 * 2. UPDATE `Stores` SET `ManagerId`=NULL,`updatedAt`='2016-06-23 23:39:27' 
	 *	 	WHERE `id` = 1
	 * 3. UPDATE `Stores` SET `ManagerId`=1,`updatedAt`='2016-06-23 23:39:27' 
	 *		WHERE `id` = 2
	 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */
})
