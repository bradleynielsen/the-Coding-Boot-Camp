var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var icecreams = [
  { name: "vanilla", price: 10, awesomeness: 3 },
  { name: "chocolate", price: 4, awesomeness: 8 },
  { name: "banana", price: 1, awesomeness: 1 },
  { name: "greentea", price: 5, awesomeness: 7 },
  { name: "jawbreakers", price: 6, awesomeness: 2 },
  { name: "vanilla", price: 10, awesomeness: 3 }
];

app.get("/icecream/:name", function(req, res) {
  for (var i = 0; i < icecreams.length; i++) {
    if (icecreams[i].name === req.params.name) {
      return res.render("icecream", icecreams[i]);
    }
  }
});

app.get("/icecreams", function(req, res) {
  res.render("icecreams", { ics: icecreams });
});

var port = 3000;
app.listen(port);
