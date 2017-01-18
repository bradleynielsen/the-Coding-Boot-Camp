//INITIALIZES THE NPM PACKAGES USED//
var mysql=require('mysql');
var inquirer=require('inquirer');

//INITIALIZES THE CONNECTION VARIABLE TO SYNC WITH A MYSQL DATABASE//
var connection=mysql.createConnection({
	host:"localhost",
	port: 3306,
	user:"root", //Your username//
	password:"LARPing1991", //Your password//
	database:"Bamazon"})

//CREATES THE CONNECTION WITH THE SERVER AND MAKES THE TABLE UPON SUCCESSFUL CONNECTION//
connection.connect(function(err){
	if(err){
		console.error("error connecting: "+err.stack);}
	makeTable();})

//FUNCTION TO GRAB THE PRODUCTS TABLE FROM THE DATABASE AND PRINT RESULTS TO CONSOLE//
var makeTable=function(){
	//SELECTS ALL OF THE DATA FROM THE MYSQL PRODUCTS TABLE//
	connection.query('SELECT * FROM products',function(err,res){
		if(err)throw err;
		//PRINTS THE TABLE TO THE CONSOLE WITH MINIMAL STYLING//
		var tab="\t";
		console.log("ItemID\tProduct Name\tDepartment Name\tPrice\t# In Stock");
		console.log("--------------------------------------------------------");
		//FOR LOOP GOES THROUGH THE MYSQL TABLE AND PRINTS EACH INDIVIDUAL ROW ON A NEW LINE//
		for(var i=0;i<res.length;i++){
			console.log(res[i].ItemID+tab+res[i].ProductName+tab+res[i].DepartmentName+tab+res[i].Price+tab+res[i].StockQuantity);}
		console.log("--------------------------------------------------------");
		//RUNS THE CUSTOMER'S PROMPTS AFTER CREATING THE TABLE. SENDS res SO THE promptCustomer FUNCTION IS ABLE TO SEARCH THROUGH THE DATA//
		promptCustomer(res);})}

//FUNCTION CONTAINING ALL CUSTOMER PROMPTS//
var promptCustomer=function(res){
	//PROMPTS USER FOR WHAT THEY WOULD LIKE TO PURCHASE//
	inquirer.prompt([
		{type:'input',
		name:'choice',
		message:'What would you like to purchase? [Quit with Q]'}]).then(function(val){
		//SET THE VAR correct TO FALSE SO AS TO MAKE SURE THE USER INPUTS A VALID PRODUCT NAME//
		var correct=false;
		//LOOPS THROUGH THE MYSQL TABLE TO CHECK THAT THE PRODUCT THEY WANTED EXISTS//
		for(var i=0;i<res.length;i++){
			//IF THE PRODUCT EXISTS, SAVE THE DATA FOR SAID PRODUCT WITHIN THE product AND id VARIABLES//
			if(res[i].ProductName==val.choice){
				var correct=true;
				var product=val.choice;
				var id=i;
				//PROMPTS THE USER TO SEE HOW MANY OF THE PRODUCT THEY WOULD LIKE TO BUY//
				inquirer.prompt([
					{type:'input',
					name:'quant',
					message:"How many would you like to buy?"}]).then(function(val){
					//CHECKS TO SEE IF THE AMOUNT REQUESTED IS LESS THAN THE AMOUNT THAT IS AVAILABLE//
					if((res[id].StockQuantity-val.quant)>0){
						//REMOVES THE AMOUNT REQUESTED FROM THE MYSQL TABLE//
						connection.query("UPDATE products SET StockQuantity='"+(res[id].StockQuantity-val.quant)+"' WHERE ProductName='"+product+"'", function(err, res2){
							if(err)throw err;
							//TELLS THE USER THAT THE PRODUCT HAS BEEN PURCHASED//
							console.log("PRODUCT BOUGHT!");
							//REWRITES THE TABLE AND STARTS AGAIN//
							makeTable();})}
					//IF THE AMOUNT REQUESTED WAS GREATER THAN THE AMOUNT AVAILABLE, RESTARTS PROMPTS//
					else{
						console.log("NOT A VALID SELECTION!");
						promptCustomer(res);}})}
			//IF THE USER INPUTTED Q, EXIT PROGRAM//
			if(val.choice=="Q"||val.choice=="q"){process.exit()}}
		//IF THE PRODUCT REQUESTED DOES NOT EXIST, RESTARTS PROMPTS//
		if(i==res.length&&correct==false){
			console.log("NOT A VALID SELECTION");
			promptCustomer(res);}
		})}