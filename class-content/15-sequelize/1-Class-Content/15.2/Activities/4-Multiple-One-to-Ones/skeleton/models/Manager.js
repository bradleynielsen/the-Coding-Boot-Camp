// Manager Model
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
// This function defines instructions for instantiating the model.
// Index.js will then use sequelize's 'import' method to reference the model.
// NOTE: .import needs two args representing sequelizeConnection and DataTypes.
// This args are defined when .import runs this function.
module.exports = function(sequelize, DataTypes){
	// Now, we define our Manager model for our managers table
	var Manager = sequelize.define('Manager', {
		// we save a primary id as an auto-incrementing int.
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		// the only other field is the manager's full name
		fullName: {
			type: DataTypes.STRING
		}
	}, {
		classMethods: {
			// OUR hasOne() RELATION
			// ======================
			// associate gets called within index.js,
			// and mergers this model with models.store and models.uniform
      associate: function(models) {
      	// TODO: use the hasOne method to join Manager with the Store and uniform
      }
    }
  })

	// Finally, we return the Manager model to the Module
	return Manager;
}

