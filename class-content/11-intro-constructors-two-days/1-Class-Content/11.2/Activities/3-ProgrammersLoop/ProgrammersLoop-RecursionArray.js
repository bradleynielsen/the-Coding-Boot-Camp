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
    console.log("---------------");
}

//VARIABLE WE WILL USE TO COUNT HOW MANY TIMES OUR QUESTIONS HAVE BEEN ASKED
var count = 0;
//ARRAY IN WHICH WE WILL STORE EACH OF OUR NEW Programmer OBJECTS
var programmerArray = [];

var askQuestion = function() {
    //IF STATEMENT TO ENSURE THAT OUR QUESTIONS ARE ONLY ASKED FIVE TIMES
    if (count < 5) {
        console.log("NEW PROGRAMMER")
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
            //PUSHES newGuy OBJECT INTO OUR ARRAY
            programmerArray.push(newGuy);
            //ADD ONE TO COUNT TO INCREMENT OUR RECURSIVE LOOP BY ONE
            count++;
            //RUN THE askQuestion FUNCTION AGAIN SO AS TO EITHER END THE LOOP OR ASK THE QUESTIONS AGAIN
            askQuestion();
        })
        //ELSE STATEMENT WHICH RUNS A FOR LOOP THAT WILL EXECUTE .printInfo() FOR EACH OBJECT INSIDE OF OUR ARRAY
    } else {
        for (var x = 0; x < programmerArray.length; x++) {
            programmerArray[x].printInfo();
        }
    }
}

//CALL askQuestion TO RUN OUR CODE
askQuestion();