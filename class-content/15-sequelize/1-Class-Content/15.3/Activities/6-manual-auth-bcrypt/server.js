/** WORKING WITH BCRYPT
 * ===================

 * PROTIP: This is meant to show students how to use bcrypt 
 * to store secure passwords with node.
 * 
 * THIS IS NOT A WORKING APP! 
 * It is meant to show how you write out bcrypt functions.
 * The next exercise will show bcrypt in action.
 *
 * Do not let this be your final destination for learning encryption.
 * Understanding the philosophy and best practices of hashing and salting
 * will not only give you an upperhand for certain jobs, but,
 * more importantly, will help you make your sites less prone to hacking 
 * (and keep your legal fees down).
 *
 * Read up on proper security hashing, starting here:
 * https://crackstation.net/hashing-security.htm
 * http://code.tutsplus.com/tutorials/understanding-hash-functions-and-keeping-passwords-safe--net-17577
 **/


/* A) DEPENDENCY */
var bcrypt = require('bcrypt'); // easy


/* B) STORING A PASSWORD */
// Let's assume this is a registration page's api.

app.post('/register', function(req, res) {
	// INPUTS
	// ======
	// grab username from AJAX
	var username = req.body.username;
	// grab password from AJAX
	var password = req.body.password;



	// BCRYPT
	// ======
	// Use bcrypt to generate a salt with 10 rounds
	var salt = bcrypt.genSaltSync(10);

	// (this is just to show the salt in the console)
	console.log(salt)

	// Use bcrupt to hash the password with the salt
	var hash = bcrypt.hashSync(password, salt);


	// QUERIES
	// =======
	// at this point, you would run a query 
	// to store the hash to a user's profile info
	var s = 'INSERT INTO users VALUES (?, ?)';

	// Run the query, using the username we captured and the hash we created
	connection.query(s,[username, hash], function(err, result) {
		// now we have access to the username and hash
		console.log(result.username);
		console.log(result.hash);

		// Notice that the main password is not saved.
		// Only the encrypted has gets saved.
	})
	// That oughta do it!
})


// EXTRA: There are asynchronous ways to work with password storage, as well

// generate a salt with 10 rounds
bcrypt.genSalt(10, function(err, salt) {
	// once the salt is made, hash the password with that salt
  bcrypt.hash(password, salt, function(err, hash) {
      // Store hash in your password DB, using the same process from above
      var s = 'INSERT INTO users VALUES (?, ?)';
			connection.query(s,[username, hash], function(err, result) {
				console.log(result.username);
				console.log(result.hash);
			})
  });
});

// or, an even shorter one, just using the hash method

// hash the password bacon with a 10-round salt
bcrypt.hash('bacon', 10, function(err, hash) {
  // Store hash in your password DB, using the same process from above
  var s = 'INSERT INTO users VALUES (?, ?)';
	connection.query(s,[username, hash], function(err, result) {
		console.log(result.username);
		console.log(result.hash);
	})
});



/* C) VERIFYING A USER'S PASSWORD */

// let's assume we're working with the api to log a user in
app.post("/login", function(req, res){

	// INPUTS
	// ======
	// grab username from AJAX
	var username = req.body.username;
	// grab password from AJAX
	var password = req.body.password;

	// QUERIES
	// =======
	// create a query to retrieve the hash from the username
	var s = 'SELECT hash FROM users WHERE username=?';

	// now run the query
	connection.query(s,[username], function(err, result) {
		


		// BYCRYPT
		// =======
		// save the hash from the result of our query
  	var hash = result.hash;

  	// ENTER THE BCRYPT COMPARE FUNCTION
  	// compare user entry  with the hash we retrieved
		bcrypt.compare(password, hash, function(err, res) {
	    // if the password is true
	    if(res === true) {
				// you can make the site operate as intended for logged in users
				console.log('Hacker voice: "I\'m in."')
	    }
	    else {
	    	// otherwise, you can black access to parts of your site
	    	console.log('Hacker voice: "I\'m not in."')
	    }
		});
	});
})