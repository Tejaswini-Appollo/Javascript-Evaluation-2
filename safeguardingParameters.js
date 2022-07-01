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