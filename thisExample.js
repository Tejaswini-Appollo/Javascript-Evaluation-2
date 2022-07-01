const person = {
    firstName: "Tejaswini",
    lastName: "Appollo",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName());