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

// Function which stakes in a number and simply console.logs that number
var printTheTotal = function (total) {
	console.log('Running the printTheTotal function...');
	console.log(total.toFixed(2));
};

// Calls the printTheTotal function with addTheTax as its sole parameter which takes in the addThemUp function as its sole parameter which takes in two variables as its parameters
printTheTotal(addTheTax(addThemUp(videoGame, movie)));
