var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var lunches = [
  { lunch: 'Beet & Goat Cheese Salad with minestrone soup.' },
  { lunch: 'Pizza, two double veggie burgers, fries with a big glup' }
];

app.get('/weekday', function (req, res) {
	res.render('index', lunches[0]);
});
app.get('/weekend', function (req, res) {
	res.render('index', lunches[1]);
});

app.get('/lunches', function (req, res) {
	res.render('AllLunches', {
		foods: lunches,
		eater: 'david'
	});
});

var port = 3000;
app.listen(port);
