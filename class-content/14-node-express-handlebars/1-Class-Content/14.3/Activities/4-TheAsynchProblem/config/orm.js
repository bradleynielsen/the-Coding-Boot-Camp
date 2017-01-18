var connection = require('../config/connection.js');

var orm = {
    selectWhere: function(tableInput, colToSearch, valOfCol) {
        var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + colToSearch + ' = ?';

        connection.query(queryString, [valOfCol], function(err, result) {
            return result;
        });
    }
};

module.exports = orm;
