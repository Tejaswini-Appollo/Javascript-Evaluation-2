(function() {
    console.log("This is an anonymous function.")
})();

(function(a, b) {
    console.log(a + b);
})(5, 5);

setTimeout(function() {
    console.log("Anonymous function as an argument.")
}, 2000);