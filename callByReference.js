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
console.log(person);
