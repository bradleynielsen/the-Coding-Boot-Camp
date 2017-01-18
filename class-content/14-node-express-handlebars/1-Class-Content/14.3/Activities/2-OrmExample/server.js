var orm = require('./config/orm.js');

/* The following commands will run every time the app gets started.*/

// Find all the pets ordering by the lowest price to the highest price
// JUST FOR YOUR REFERENCE: selectAndOrder(whatToSelect, table, orderCol, orderBy)
orm.selectAndOrder('animal_name', 'pets', 'price', 'DESC');
// the above query does this:
// SELECT * FROM pets ORDER BY price DESC;

// Find a pet in the pets table by an animal_name of Rachel
// JUST FOR YOUR REFERENCE: selectWhere(tableInput, colToSearch, valOfCol)
orm.selectWhere('pets', 'animal_name', 'Rachel');
// the above query does this:
// SELECT * FROM pets WHERE animal_name = Rachel;

// Find the buyer with the most pets
// JUST FOR YOUR REFERENCE: findWhoHasMost(tableOneCol, tableTwoForeignKey, tableOne, tableTwo)
orm.findWhoHasMost('buyer_name', 'buyer_id', 'buyers', 'pets');
// the above query does this:
/*
SELECT buyer_name, COUNT(buyer_name) AS count
FROM buyers
LEFT JOIN pets ON pets.buyer_id = buyers.id
GROUP BY buyer_name
ORDER BY count desc
LIMIT 1
*/
