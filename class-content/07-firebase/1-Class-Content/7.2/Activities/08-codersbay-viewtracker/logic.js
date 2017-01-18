// Initialize Firebase
var config = {
	apiKey: "AIzaSyDxQqkGa3AKrcGmGVFalJe40g4hdzADf6w",
	authDomain: "coder-bay-views.firebaseapp.com",
	databaseURL: "https://coder-bay-views.firebaseio.com",
	storageBucket: "coder-bay-views.appspot.com",
};
firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// --------------------------------------------------------------

// Link to Firebase Database for viewer tracking


// --------------------------------------------------------------


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-("

var highPrice = initialBid;
var highBidder = initialBidder;

// counter for views
var viewCounter = 0;

// --------------------------------------------------------------

// Add ourselves to presence list when online.






// Number of online users is the number of objects in the presence list.





// ----------------------------------------------------------------    

// At the initial load, get a snapshot of the current data.
database.ref('/bidderData').on("value", function(snapshot) {

	// If Firebase has a highPrice and highBidder stored (first case)
	if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

		// Set the initial variables for highBidder equal to the stored values.
		highBidder = snapshot.val().highBidder;
		highPrice = parseInt(snapshot.val().highPrice);

		// Change the HTML to reflect the initial value
		$('#highestBidder').html(snapshot.val().highBidder);
		$('#highestPrice').html("$" + snapshot.val().highPrice);


		// Print the initial data to the console.
		console.log(snapshot.val().highBidder);
		console.log(snapshot.val().highPrice)
	}

	// Keep the initial variables for highBidder equal to the initial values
	else{

		// Change the HTML to reflect the initial value
		$('#highestBidder').html(highBidder);
		$('#highestPrice').html("$" + highPrice);

		// Print the initial data to the console.
		console.log("Current High Price")
		console.log(highBidder);
		console.log(highPrice)
	}



// If any errors are experienced, log them to console. 
}, function (errorObject) {

  	console.log("The read failed: " + errorObject.code);

});

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#submitBid").on("click", function() {

	// Get the input values
	var bidderName = $('#bidderName').val().trim(); 
	var bidderPrice = parseInt($('#bidderPrice').val().trim());

	// Log the Bidder and Price (Even if not the highest)
	console.log(bidderName);
	console.log(bidderPrice);

	if(bidderPrice > highPrice) {

		// Alert 
		alert("You are now the highest bidder.");

		// Save the new price in Firebase
		database.ref('/bidderData').set({
			highBidder: bidderName,
			highPrice: bidderPrice
		});

		// Log the new High Price
		console.log("New High Price!");
		console.log(bidderName);
		console.log(bidderPrice);

		// Store the new high price and bidder name as a local variable (could have also used the firebase variable)
		highBidder = bidderName;
		highPrice = parseInt(bidderPrice);

		// Change the HTML to reflect the new high price and bidder
		$("#highestBidder").html(bidderName);
		$("#highestPrice").html("$" +  bidderPrice);

	}

	else{

		// Alert
		alert("Sorry that bid is too low. Try again.");	
	}

	// Return False to allow "enter"
	return false;
});


