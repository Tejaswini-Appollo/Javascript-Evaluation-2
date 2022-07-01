# Javascript Evaluation 2

## 1. Displaying Prime numbers from 1 to 200
``` Javascript
let primeNumber = [];

function isPrimeNumber(num) {
    if(num == 1) {
        return "1 is neither prime nor composite number."
    }
    else {
        let flag = 0;
        for(let k = 2; k < num; k++) {
            if(num % k == 0) {
                flag = 1;
                break;
            }
        }
        if(flag == 0) {
            primeNumber.push(num);
        }
    }
}

for(let i = 1; i <= 200; i++) {
    isPrimeNumber(i);
}

console.log(primeNumber);
```
## Output
``` Javascript
[
    2,   3,   5,   7,  11,  13,  17,  19,  23,  29,
   31,  37,  41,  43,  47,  53,  59,  61,  67,  71,
   73,  79,  83,  89,  97, 101, 103, 107, 109, 113,
  127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
  179, 181, 191, 193, 197, 199
]
```

## 2. Displaying common numbers
``` Javascript
const arr1 = [1, 2, 3, 5, 6, 7];
const arr2 = [6, 7];

const commonValue = [];

arr1.forEach(num1 => {
    arr2.forEach(num2 => num1 === num2 && commonValue.push(num1))
})

console.log(commonValue);
```
## Output
``` Javascript
[ 6, 7 ]
```


## 3. Function Anatomy
### Anonymous Function
``` Javascript
These are the functions that doesnot have any name

(function () {
    console.log("Hello world");
})();
```
### Output
``` Javascript
Hello world
```
### Assigning functions to a variable
``` Javascript
let greet = function() {
    console.log("Hello world");
}

greet();
```
### Output
``` Javascript
Hello world
```

## 4. Safeguarding Function Parameters
``` Javascript
The solution is to safeguard the value by checking its type. 
JavaScript has a built-in function typeof() that we can used

function typeCheck(input) {
	if(typeof(input) == "function") {
		return "The given argument is a function";
	}
else {
	return "The given argument is not a function";
}
}

let sampleArray = [];
console.log(typeCheck(sampleArray));
```
## Output 
``` Javascript
The given argument is not a function
```

## 5. this keyword 
``` Javascript
In Javascript, this keyword refers to an object.

const person = {
    firstName: "Tejaswini",
    lastName: "Appollo",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName());
```
## Output
``` Javascript
Tejaswini Appollo
```


## 6. this inside a function and a class
### this inside a function
``` Javascript
In a function, the global object is the default binding for this
In a browser window, the global object is [object Window]

function thisInsideFunction() {
    return this;
}

console.log(thisInsideFunction());
```
### Output
``` Javascript
Window
```
### this inside a class
``` Javascript
When using this inside of a class it points to the current object

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
```
### Output
``` Javascript
Welcome John
```

## 7. Map, Filter, Reduce
### map()
``` Javascript
const arr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

let squareNumbers = arr.map(squareNumber);

function squareNumber(num) {
    return Math.sqrt(num);
}

console.log(squareNumbers);
```
### Output
``` Javascript
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
```
### reduce()
``` Javascript
const reduceArray = [200, 75, 50, 25];

let result = reduceArray.reduce(reduceTheNumber);

function reduceTheNumber(total, num) {
    return total - num;
}

console.log(result);
```
### Output
``` Javascript
50
```
### filter()
``` Javascript
const filterArray = [20, 15, 3, 9, 11, 49, 55];

let ageArray = filterArray.filter(eligibleToVote);

function eligibleToVote(num) {
    if(num >= 18) {
        return num;
    }
}

console.log(ageArray);
```
### Output
``` Javascript
[ 20, 49, 55 ]
```

## 8. To calculate zero from 1 upto 50
``` Javascript
let count = 0;

function zeroCount(num) {
    let numText = num.toString(); 
    if(numText.includes(0)) {
        count += 1;
    }
}

for(let start = 1; start <= 50; start++) {
    zeroCount(start);
}

console.log(count);
```
## Output
``` Javascript
5
```


## 9. Listing out the missing number
``` Javascript
const arr = [1, 2, 3, 5, 6];

let maxValue = Math.max(...arr);

for(let i = 1; i <= maxValue; i++) {
    if(!arr.includes(i)) {
        console.log(i);
    }
}    
```
## Output
``` Javascript
4
```

## 10. Calculating age from DOB
``` Javascript
let dateOfBirth = "17-06-1987";
let year = dateOfBirth.slice(-4,);
let numberYear = parseInt(year);
console.log(2022 - numberYear);
```
## Output
``` Javascript
35
```

## 11. Call by value and Call by reference
``` Javascript
In Javascript, we have functions and we pass arguments to that function. These arguments can be passed by two ways. One is by passing it as a value and the other is by passing it as a reference.
```
### Call by value
``` Javascript
In call by value, the values passed into the function when modified doesnot affects the global variable.

let day1 = "Sunday";

function dayOfTheWeek(day) {
    day = "Monday";
}

console.log("Before Function call");
console.log(day1);
dayOfTheWeek(day1);
console.log("After Function call");
console.log(day1);
```
### Output
``` Javascript
Before Function call
Sunday
After Function call
Sunday
```

### Call by reference
``` Javascript
In call by reference, it is applicable incase of objects and arrays, where changing the data member of an object passed affects the object present outside.

let person = {
    firstName: "Maya",
    lastName: "John"
}

function fullName(name) {
    name.lastName = "Mathews"
}

console.log("Before Function call");
console.log(person);
fullName(person);
console.log("After Function call");
console.log(person);=
```
### Output
``` Javascript
Before Function call
{ firstName: 'Maya', lastName: 'John' }
After Function call
{ firstName: 'Maya', lastName: 'Mathews' }
```

## 12. Arity in Javascript
``` Javascript
Arity is the term used to refer to the number of arguments or in a function or operation.

Example

function getFullName(firstName, lastName) {
    return firstName + lastName;
}

console.log(getFullName("Hey", "there"));
```
## Output
``` Javascript
Hey there
```

## 13. Currying in Javascript
``` Javascript
Currying in Javascript simply means evaluating a function with multiple arguments and decomposing them into a sequence of functions with a single argumrnt.

Example

function greeting(greet, name, message) {
    return `${greet} ${name}, ${message}`;
}

console.log(greeting("Good Morning", "John", "How are you?"));


function sendRequest(greet) {
    return function(name) {
        return function(request) {
            return `${greet} ${name} ${request}`;
        }
    }
}

console.log(sendRequest("Hey")("John")("Accept my request"));
```
## Output
``` Javascript
Good Morning John, How are you?
Hey John Accept my request
```

## 14. ES6
``` Javascript
ECMAScript 2015 was the second major revision to JavaScript.
ECMAScript 2015 is also known as ES6 and ECMAScript 6.

New features like let keyword, const keyword, arrow functions and many more are introduced here.
```

## 15. Anonymous function
``` Javascript
1. Anonymous functions are the functions that are declared without any name.

2. Example

(function() {
    console.log("This is an anonymous function.")
})();
```
### Output
``` Javascript
This is an anonymous function.
```
``` Javascript
We can use the anonymous function in three ways:
1. One is like passing it as an argument to another function
2. The other is like using it as a closure
3. The way is to assign it to a variable and access it by using that variable

Example

(function(a, b) {
    console.log(a + b);
})(5, 5);

setTimeout(function() {
    console.log("Anonymous function as an argument.")
}, 2000);
```
### Output
``` Javascript
10
Anonymous function as an argument.
```
``` Javascript
An anonymous function can be useful for creating IIFE(Immediately Invoked Function Expression).
```

## 16. Named functions and Assigning functions to a variable
### Named functions
``` Javascript
1. Named functions are the functions that are declared using the keyword function and followed by the function name.

2. Example:

function display() {
    console.log("This is an example for named function.");
}

display();  
```
### Output
``` Javascript
This is an example for named function.
```

### Assigning functions to a variable
``` Javascript
1. These are the functions that are assigned to a variable and can be called by using that variable name.

2. Example:

let display = function() {
    console.log("This is an example for assigning functions to a variable.")
}

display();  
```
### Output
``` Javascript
This is an example for assigning functions to a variable.
```