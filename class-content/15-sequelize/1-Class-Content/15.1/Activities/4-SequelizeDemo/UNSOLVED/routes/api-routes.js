// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// TODO:
// =====
// Replace this dependency with one to your model directory
// to link your Character model. (hint: we slacked the line out earlier).
var orm 			= require ("../config/orm.js");


// Routes
// =============================================================
module.exports = function(app){

	// Search for Specific Character (or all characters) then provides JSON
	app.get('/api/:characters?', function(req, res){

		// If the user provides a specific character in the URL...
		if(req.params.characters){

			// TODO:
			// =====
			// Replace this ORM call with the sequelize alternative.
			// Check the Sequelize docs for the model method that finds one character
			// and figure out where the "where" option would go.
			// Connect that method with this callback: .then(function(result){}).
			// In the curly braces, send the result to the front-end as json
			orm.searchCharacter(req.params.characters,function(data){
				res.json(data);
			})
		}

		// Otherwise...
		else{
			
			// NOTE: This one has been done for you already. 
			// Use this as a hint for the earlier query.
			Character.findAll({})
				.then(function(result){
					return res.json(result);
			})
		};
	});

	// If a user sends data to add a new character...
	app.post('/api/new', function(req, res){

		// Take the request...
		var character = req.body;

		// TODO:
		// =====
		// use the model method that will let you 
		// post this data to the Character table. 
		// Connect that method with this callback: .then(function(result){}).
		// In the curly braces, send the result to the front-end as json
		orm.addCharacter(character, function(data){
		});

	})
}
