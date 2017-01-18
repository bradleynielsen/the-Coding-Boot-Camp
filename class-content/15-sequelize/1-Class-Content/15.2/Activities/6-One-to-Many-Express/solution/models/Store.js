// Store Model
// -/-/-/-/-/-/-

/* IMPORTANT
 * This model will look a bit different from last class.
 *
 * With associations, we need to put a little more elbow greece into our models. 
 *
 * Basically, this model gets imported into models/index.js, 
 * where it can be associated with our other model(s).
 *
 * The only alternative is one huge file with all of our models defined.
 * That would be hella gross (and certainly not very elegant). 
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */




// We start out by exporting an anonymous function for index.js to run.
// This function basically gives index.js the instructions for creating the model.
// Index.js will pass sequelizeConnection and DataTypes into the function.
// This basically let's us instantiate the model in index.js.
module.exports = function(sequelize, DataTypes){
	var Store = sequelize.define('Store', {
		// id is the auto-incrementing primary id (an int)
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		// storeZip is also an integer, and it represents the zip code of the store
		storeZip: {
			type: DataTypes.INTEGER,
		}
	})

	// Finally, we return the Manager model to the Module, effectively exporting it
	return Store;
}
