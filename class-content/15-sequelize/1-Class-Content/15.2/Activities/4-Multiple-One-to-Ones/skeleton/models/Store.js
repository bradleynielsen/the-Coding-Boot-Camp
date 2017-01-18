// Store Model
// -/-/-/-/-/-/-

/* IMPORTANT
 *
 * With associations, we need to put a little more elbow greece into our models. 
 *
 * Basically, this model gets imported into models/index.js, 
 * where it can be associated with our other model(s).
 *
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
		// storeZip is a string, and it represents the zip code of the store
		storeZip: {
			type: DataTypes.STRING
		}
	})

	// Finally, we return the Manager model to the Module
	return Store;
}
