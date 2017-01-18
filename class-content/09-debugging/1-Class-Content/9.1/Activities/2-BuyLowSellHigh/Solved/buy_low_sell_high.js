/**
 * Buy Low, Sell High -- Solution
 **/

// Stock prices
iagStockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];

// Function to find the biggest possible profit in the stock bracket.
function biggestProfit(stockArray, sharesBought) {

	// Check to make sure stock array is greater than 2.
	if (stockArray.length > 2){

		// Set initial minPrice, you cant buy any earlier than the first value.
		var minPrice = stockArray[0];

		// Set initial max profit, your first opportunity to sell is the second number.
		var maxProfit = stockArray[1] - stockArray[0];

		// Loops over the array, skipping the first value, 
		// since its already the minPrice and we cant sell when we buy.
		for (var i=1; i<stockArray.length; i++){

			// Temp hold the current price in a variable.
			var currentPrice = stockArray[i];

			// Potential profit is the current price minus the minPrice.
			var potentialProfit = currentPrice - minPrice;

			// If maxProfit is less than the current potential profit, update the maxProfit.
			if(maxProfit<potentialProfit){
				maxProfit = potentialProfit;
			}

			// If minPrice is more than the current price, update the minPrice.

			if (minPrice>currentPrice){
				minPrice = currentPrice;
			}
		}
		// Multiply the maxProfit by the number of shares to get the total.
		return maxProfit * sharesBought;
	}
	// If the stock array isn't greater than 2,
	else{
		 // log an error.
		console.log('Error, you need at least 2 prices');
	}
};


// Call the function.
biggestProfit(iagStockPrices, 10000);
