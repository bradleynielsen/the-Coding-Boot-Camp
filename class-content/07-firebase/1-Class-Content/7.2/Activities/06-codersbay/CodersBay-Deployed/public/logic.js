// Link to Firebase
var bidderData = new Firebase("https://rcb-codersbay.firebaseio.com/");

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-("

var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// 
// At the initial load, get a snapshot of the current data.
bidderData.on("value", function(snapshot) {

	// If Firebase has a highPrice and highBidder stored (first case)
	if (true) {

		// Set the initial variables for highBidder equal to the stored values.
		highBidder = snapshot.val().highBidder;
		highPrice = snapshot.val().highPrice;

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
	var bidderPrice = $('#bidderPrice').val().trim(); 

	// Log the Bidder and Price (Even if not the highest)
	console.log(bidderName);
	console.log(bidderPrice);

	if(bidderPrice > highPrice) {

		// Alert 
		alert("You are now the highest bidder.");

		// Save the new price in Firebase
		bidderData.set({
			highBidder: bidderName,
			highPrice: bidderPrice
		});

		// Log the new High Price
		console.log("New High Price!");
		console.log(bidderName);
		console.log(bidderPrice);

		// Store the new high price and bidder name as a local variable (could have also used the firebase variable)
		highBidder = bidderName;
		highPrice = bidderPrice;

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


