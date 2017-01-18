// Employee Model
// -/-/-/-/-/-/-

// SOLUTION
// ========

// We prepare our Employee model just like every other
module.exports = function(sequelize, DataTypes){
	// now, we create a model to represent our employees table
	var Employee = sequelize.define('Employee', {
		// our primary id
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		// the full name of the employee
		fullName: {
			type: DataTypes.STRING,
		},
		// his role in the company
		role: {
			type: DataTypes.STRING,
		},
	})

	// return the Class, effectively exporting it
	return Employee;
}