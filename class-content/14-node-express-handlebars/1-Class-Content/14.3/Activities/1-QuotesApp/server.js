var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'quotes_db'
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// Express and MySQL code should go here//
app.get('/', function(req, res) {
	connection.query('SELECT * FROM quotes', function(err, data) {
		console.log(data);
		var renderData = {
			quotes: data
		}

		res.render('index', renderData)
	});
})

app.delete('/delete', function (req, res) {
	connection.query('DELETE FROM quotes WHERE id = ?', [req.body.id], function (err, result) {
		if (err) throw err;
		res.redirect('/');
	});
});

app.get('/quotes/:id', function (req, res) {
	connection.query('SELECT * FROM quotes where id = ?', [req.params.id], function (err, data) {
		if (err) throw err;
		res.render('single_quote', data[0]);
	});
});

app.put('/update/:id', function (req, res) {
	connection.query('UPDATE quotes SET author = ?, quote = ? WHERE id = ?', [req.body.author, req.body.quote, req.params.id], function (err, result) {
		if (err) throw err;
		res.redirect('/');
	});
});

var port = 3000;
app.listen(port, function () {
	console.log('Listening on PORT ' + port);
});
