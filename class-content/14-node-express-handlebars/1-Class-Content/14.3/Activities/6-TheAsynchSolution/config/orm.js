var connection = require('../config/connection.js');

var orm = {
	selectWhere: function (tableInput, colToSearch, valOfCol, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + colToSearch + ' = ?';
		connection.query(queryString, [valOfCol], function (err, result) {
			cb(result);
		});
	}
};

module.exports = orm;
