var orm = require('./config/orm.js');

var data = orm.selectWhere('parties', 'party-type', 'grown-up');

console.log(data); //data is undefined - why?
