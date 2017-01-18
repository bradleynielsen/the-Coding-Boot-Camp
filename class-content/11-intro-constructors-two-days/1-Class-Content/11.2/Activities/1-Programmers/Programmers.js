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

//NEW Programmer OBJECT IS INITIALIZED TO bob AND IS PROVIDED WITH THE VARIABLES NECESSARY TO CREATE ALL OF THE PROPERTIES
var bob = new Programmer("Bob Smith", "Supreme CodeMaster", 33, "JavaScript");

//CALLS THE printInfo METHOD FOR BOB TO PRINT ALL OF HIS INFORMATION TO THE CONSOLE
bob.printInfo();