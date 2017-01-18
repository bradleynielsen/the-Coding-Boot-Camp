var Student = require('./Student.js');

var Classroom = function(profName,roomNum){
	this.students = [];
  this.numStudents = 0;
	this.profName = profName;
	this.roomNum = roomNum;
	this.addStudent = function(x,y,z){
		this.students.push(new Student(x,y,z));
    this.numStudents = this.students.length;
	}
}

module.exports = Classroom;