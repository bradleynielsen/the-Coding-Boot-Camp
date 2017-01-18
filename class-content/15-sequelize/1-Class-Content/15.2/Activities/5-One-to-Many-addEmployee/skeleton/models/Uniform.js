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
	// now, we create a model to represent our Uniform table
	var Uniform = sequelize.define('Uniform', {
		// our primary id
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		// the color of the uniform, as a string
		color: {
			type: DataTypes.STRING,
		},
		// an arbitrary uniform number
		uniformNum: {
			type: DataTypes.INTEGER,
		}
	})

	// return the Class, effectively exporting it
	return Uniform;
}