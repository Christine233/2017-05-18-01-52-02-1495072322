// Write your code here
class Person {
	constructor(a,b) {
	this.myname = a;
	this.age = b;
	}

	introduce() {
		return "My name is " + this.myname + ". " + "I am " + this.age + " years old.";
	}
}
module.exports = Person