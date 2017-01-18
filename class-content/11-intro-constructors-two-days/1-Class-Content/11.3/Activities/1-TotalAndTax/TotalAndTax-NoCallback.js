// Declaration of variables we will be using in this example
var videoGame = 49.95;
var movie = 19.95;

// Function which takes in two numbers, adds them together, and then returns the result
var addThemUp = function (a, b) {
	var sum = a + b;
	return sum;
};

// Function which takes a number, adds a 10% tax to it, and then returns the result
var addTheTax = function (sum) {
	var total = sum * 1.1;
	return total;
};

// Call the addThemUp function with "videoGame" and "movie" as the variables to take in. Initialize the variable "sum" to the result of the function
var sum = addThemUp(videoGame, movie);

// Call the addTheTax function with "sum" as the variable to take in. Initialize the variable "total" to the result of the function
var total = addTheTax(sum);

// If you would like to console.log the total to just two decimal places then you could add '.toFixed(2)' after 'total'
console.log(total.toFixed(2));
