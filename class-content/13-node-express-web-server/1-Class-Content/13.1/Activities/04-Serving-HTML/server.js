// Requiring dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 80
var PORT = 80;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  fs.readFile("index.html", function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });

}

// Starts our server.
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});


