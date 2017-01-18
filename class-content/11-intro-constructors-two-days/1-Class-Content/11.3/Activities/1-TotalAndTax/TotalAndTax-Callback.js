// Declaration of variables we will be using in this example
var videoGame = 49.95;
var movie = 19.95;

// Function which takes in two numbers, adds them together, and then returns the result
var addThemUp = function (a, b) {
	console.log('Running the addThemUp function...');
	var sum = a + b;
	return sum;
};

// Function which takes a number, adds a 10% tax to it, and then returns the result
var addTheTax = function (sum) {
	console.log('Running the addTheTax function...');
	var total = sum * 1.1;
	return total;
};

// Call the addTheTax function and use the addThemUp function as its parameter.
var total = addTheTax(addThemUp(videoGame, movie));

// If you would like to console.log the total to just two decimal places then you could add '.toFixed(2)' after 'total'
console.log(total);
console.log(total.toFixed(2));
