//this is the users_controller.js file

var bcrypt = require('bcryptjs');
var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/new', function(req,res) {
	res.render('users/new');
});

router.get('/sign-in', function(req,res) {
	res.render('users/sign_in');
});

router.get('/sign-out', function(req,res) {
  req.session.destroy(function(err) {
     res.redirect('/')
  })
});

// LOG IN
router.post('/login', function(req, res) {
  // find the user with the matching email
  models.User.findOne({
    where: {email: req.body.email}
  })
  // then,
  .then(function(user) {
  	// if no username was entered
		if (user == null){
			// redirect to sign in
			res.redirect('/users/sign-in')
		}
		// Otherwise, log them in


		// TODO:
		// =====
		// Use bcrypt to compare the user's password input
		// with the hash stored in the user's row. 

      // if (the result is true) {

				// we save the logged in status to the session
        req.session.logged_in = true;
        
        // the username to the session
				req.session.username = user.username;
				
				// the user id to the session
        req.session.user_id = user.id;
        
        // and the user's email.
        req.session.user_email = user.email;

        // redirect to home on login
				res.redirect('/')
      // }
      // else {
      	// redirect user to sign in
				res.redirect('/users/sign-in')
			// }

});

// REGISTER
router.post('/create', function(req,res) {
	// findAll users that have the posted email
	models.User.findAll({
    where: {email: req.body.email}
  })
	// then,
  .then(function(users) {

  	// if a user has the email
		if (users.length > 0){
			console.log(users)
			// stop them from registering an account with a duplicate email
			res.send('we already have an email or username for this account')
		}
		// otherwise:
		else {


			// TODO:
			// =====
			// Using bcrypt, generate a 10-round salt,
				// then use that salt to hash the user's password.

					// Using the User model, create a new user,
					// storing the email they sent and the hash you just made


						// In a .then promise connected to that create method,
						// save the user's information to req.session
						// as shown in these comments .

		 					// so what's happening here?
							// we enter the user's session by setting properties to req.

							
							// we save the logged in status to the session
		          req.session.logged_in = true;
		          
		          // the username to the session
							req.session.username = user.username;
							
							// the user id to the session
		          req.session.user_id = user.id;
		          
		          // and the user's email.
		          req.session.user_email = user.email;

		          // redirect to home on login
							res.redirect('/')
			}
	});
});

module.exports = router;
