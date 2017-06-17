let Person = require('./person')
// Write your code here
class Student extends Person {
	constructor(x,y,klass){
	super(x,y);
	this.klass = klass;
}
	introduce() {
		return "My name is "+this.myname+". "+"I am "+this.age+" years old. I am a Student. "+"I am at Class "+this.klass+".";
}
}

module.exports = Student
