// Create dependency for 'request' npm package
var request = require('request');

// Initialize color so that it is a global variable
var color;

// Function which takes in a single parameter and prints it to the screen
function printColor(x) {
	if (typeof x === 'string') {
		console.log('Instance of ' + x);
	} else if (typeof x === 'object') {
		console.log(x);
	}
}

// Create a function which takes in a callback function
function getRandomColor(callback) {
	// Create a request to the 'colourlovers' api which will select a random color from their database and which will return its value within the 'response.body'
	request({
		uri: 'http://www.colr.org/json/color/random',
		json: true // Automatically parses the JSON string in the response
	}, function (error, response) {
		console.log('Request is being made...');
		// First, make sure there is a tags element (and thus a name)
		// name associated with the random color
		if (typeof response.body.colors[0].tags[0] !== 'undefined') {
			color = response.body.colors[0].tags[0].name;
		}
		// If not, then make the color "n/a" for not available
		else {
			color = "n/a";
		}
		// Calls upon the callback function and provides with with the variable 'color' as its sole parameter
		callback(color);
	});
}

// Create a function which takes in hexcode and a callback function
function getSpecificColor(hexValue, callback) {
	// Create a request to the 'colourlovers' api which will select a specific color from their database based upon  and which will return its data within the 'response.body'
	request({
		uri: 'http://www.colr.org/json/color/' + hexValue,
		json: true // Automatically parses the JSON string in the response
	}, function (error, response) {
		console.log('Request is being made...');
		// First, make sure there is a tags element (and thus a name)
		// name associated with the random color
		if (typeof response.body.colors[0].tags[0] !== 'undefined') {
			color = response.body.colors[0].tags[0].name;
		}
		// If not, then make the color "n/a" for not available
		else {
			color = "n/a";
		}
		// Calls upon the callback function and provides with with the variable 'color' as its sole parameter
		callback(color);
	});
}


// Call the 'getRandomColor' function and provide it with 'printColor' as its sole parameter
getRandomColor(printColor);

// Call the 'getSpecificColor' function and provide it with a hexcode value and 'printColor' as its parameters
getSpecificColor('dee4dc', printColor);
