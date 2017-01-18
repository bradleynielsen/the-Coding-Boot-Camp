//DEPENDANCY FOR inquirer NPM PACKAGE
var inquirer = require('inquirer');

//CONSTRUCTOR FUNCTION USED TO CREATE Programmers OBJECTS
function Programmer(name, position, age, language) {
    this.name = name,
    this.position = position,
    this.age = age,
    this.language = language;
}

//CREATES THE printInfo METHOD AND APPLIES IT TO ALL Programmer OBJECTS
Programmer.prototype.printInfo = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " + this.age + "\nLanguages: " + this.language);
}

//VARIABLE WE WILL USE TO COUNT HOW MANY TIMES OUR QUESTIONS HAVE BEEN ASKED
var count = 0;

var askQuestion = function() {
    //IF STATEMENT TO ENSURE THAT OUR QUESTIONS ARE ONLY ASKED FIVE TIMES
    if (count < 5) {
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
            //ADD ONE TO COUNT TO INCREMENT OUR RECURSIVE LOOP BY ONE
            count++;
            //RUN THE askQuestion FUNCTION AGAIN SO AS TO EITHER END THE LOOP OR ASK THE QUESTIONS AGAIN
            askQuestion();
        })
    //ELSE STATEMENT WHICH PRINTS "All questions asked" TO THE CONSOLE WHEN THE CODE HAS BEEN RUN FIVE TIMES
    } else {
        console.log("All questions asked");
    }
}

//CALL askQuestion TO RUN OUR CODE
askQuestion();