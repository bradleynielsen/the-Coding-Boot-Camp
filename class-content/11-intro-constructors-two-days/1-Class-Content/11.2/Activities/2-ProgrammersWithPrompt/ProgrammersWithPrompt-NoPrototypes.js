//DEPENDANCY FOR inquirer NPM PACKAGE
var inquirer = require('inquirer');

//CONSTRUCTOR FUNCTION USED TO CREATE Programmers OBJECTS
function Programmer(name, position, age, language) {
    this.name = name,
    this.position = position,
    this.age = age,
    this.language = language;
    //CREATES THE printInfo METHOD AND APPLIES IT TO ALL Programmer OBJECTS
    this.printInfo = function() {
        console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " + this.age + "\nLanguages: " + this.language);
    }
}

//RUNS INQUIRER AND ASKS THE USER A SERIES OF QUESTIONS WHOSE REPLIES ARE STORED WITHIN THE VARIABLE answers INSIDE OF THE .then STATEMENT.
inquirer.prompt([{
    name: "name",
    message: "What is your name?"
}, {
    name: "position",
    message: "What is your current position?"
}, {
    name: "age",
    message: "How old are you?"
}, {
    name: "language",
    message: "What is your favorite programming language?"
}]).then(function(answers) {
    //INITIALIZES THE VARIABLE newGuy TO BE A Programmer OBJECT WHICH WILL TAKE IN ALL OF THE USER'S ANSWERS TO THE QUESTIONS ABOVE
    var newGuy = new Programmer(answers.name, answers.position, answers.age, answers.language);
    //printInfo METHOD IS RUN TO SHOW THAT THE newGuy OBJECT WAS SUCCESSFULLY CREATED AND FILLED
    newGuy.printInfo();
})