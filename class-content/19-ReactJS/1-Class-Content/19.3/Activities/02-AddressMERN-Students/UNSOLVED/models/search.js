// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var SearchSchema = new Schema({
  searchText: {
    type: String
  },
  date: { 
  	type: Date, 
  	default: Date.now }
});

// Create the Model
var Search = mongoose.model("Search", SearchSchema);

// Export it for use elsewhere
module.exports = Search;