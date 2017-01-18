var orm = require('./config/orm.js');

/*

NOTE: we updated the orm.js file.

We added in a cb argument to the selectWhere function arguments list.

We also executed cb (because we're expecting it to be a function), and passed it the data from the MySQL Query.

1. In this file, server.js, the 4th argument of orm.selectWhere is an anonymous function with res as an argument (LOOK BELOW!).

That function gets passed to orm.selectWhere along with 'parties', 'party_type', 'grown-up'

2. Inside orm object:

The selectWhere key inside orm.js builds the query so that it looks like this:
'SELECT * FROM parties WHERE party_type = ?'

That string gets stored into the queryString variable

3. Inside orm object:

the queryString gets passed to connection.query as well as [valOfCol], which gets put into the question mark part of the queryString.

4. Inside orm object:

after we get the data back from connection.query, we pass result (which is an array of object rows from the parties table where party_type = grown-up) to cb, and execute it.

Like this: cb(result)

REMEMBER! cb is the anonymous function from server.js (THIS FILE).

5. Inside orm object:

Now, res = result and res gets console logged
*/
// correct answer:
orm.selectWhere('parties', 'party_type', 'grown-up', function (res) {
	var data = res;
	console.log(data);
});
