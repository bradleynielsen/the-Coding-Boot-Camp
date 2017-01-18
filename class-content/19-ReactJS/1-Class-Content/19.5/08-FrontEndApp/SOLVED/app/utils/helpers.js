var axios = require("axios");

var helpers = {

  getGithubByUsername: function(username) {
    var queryURL = "https://api.github.com/users/" + username + "/repos";

    return axios.get(queryURL).then(function(response) {
      return response;
    });
  }
};

module.exports = helpers;
