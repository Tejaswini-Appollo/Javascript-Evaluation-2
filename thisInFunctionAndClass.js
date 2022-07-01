//this keyword inside a function

function thisInsideFunction() {
    return this;
}

console.log(thisInsideFunction());

//this keyword inside a class 

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Welcome " + this.name);
    }
}

let person1 = new Person("John");
person1.greet();