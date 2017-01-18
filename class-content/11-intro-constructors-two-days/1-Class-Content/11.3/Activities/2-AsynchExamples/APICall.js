// Create dependency for 'request' npm package
var request = require('request');

var options = {
	uri: 'http://www.colr.org/json/color/random',
	json: true // Automatically parses the JSON string in the response
};

// Initialize color so that it is a global variable
var color;

// Create a request to the "colourlovers" api which will select a random color from their database and which will return its value within the "response.body"
request(options, function (error, response) {
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
});

// Print the color's title to the screen (???)
console.log('Instance of ' + color);
