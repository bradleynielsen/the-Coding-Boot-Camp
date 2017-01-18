// An Example of a Recursion Function
// ==================================

// This function accepts a number as an argument.
var simpleRecursion = function(n) {
  // If n is more than 0,
  if (n>0){
    // log the number.
    console.log(n);
    // Run this function again,passing in the current number minus 1.
    simpleRecursion(n-1);
  } 
  // When the number reaches 0,
  else{
    // tell the user that the function is done.
    console.log('done');
    // Notice that simpleRecursion no longer gets called.
    // That marks the end of the recursive function.
  }
};