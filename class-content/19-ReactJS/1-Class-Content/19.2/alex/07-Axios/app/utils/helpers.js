var axios = require("axios");

var helpers = {

  getMovieByName: function(movieName) {
    var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

    return axios.get(queryURL).then(function(response) {
      return response;
    });
  }
};

module.exports = helpers;
