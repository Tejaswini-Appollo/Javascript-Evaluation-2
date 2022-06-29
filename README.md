# Javascript Evaluation 2

## 1. Displaying Prime numbers from 1 to 200
``` Javascript
```
## Output
``` Javascript
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