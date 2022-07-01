// Non-curried version
function greeting(greet, name, message) {
    return `${greet} ${name}, ${message}`;
}

console.log(greeting("Good Morning", "John", "How are you?"));

// Curried version
function sendRequest(greet) {
    return function(name) {
        return function(request) {
            return `${greet} ${name} ${request}`;
        }
    }
}

console.log(sendRequest("Hey")("John")("Accept my request"));