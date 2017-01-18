//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT = 8080;

var server = http.createServer(function(req, res) {

  // Saving the request method as a variable.
  var method = req.method.toLowerCase();
  var requestData = '';

  // When the server receives data, it will add it to requestData.
  req.on('data', function(data) {
    requestData += data;
  });

  // When the request has ended...
  req.on('end', function() {
    // We display the request method, as well as the data received!
    output = 'You just ' + method + '\n';
    output += requestData.toString();
    console.log(output)
    res.end()
  });

});

//Lets start our server
server.listen(PORT, function() {
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});