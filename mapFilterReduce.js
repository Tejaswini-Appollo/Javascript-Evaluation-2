// Map method in Javascript
const arr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

let squareNumbers = arr.map(squareNumber);

function squareNumber(num) {
    return Math.sqrt(num);
}

console.log(squareNumbers);

// Reduce method in Javascript
const reduceArray = [200, 75, 50, 25];

let result = reduceArray.reduce(reduceTheNumber);

function reduceTheNumber(total, num) {
    return total - num;
}

console.log(result);

// Filter method in Javascript
const filterArray = [20, 15, 3, 9, 11, 49, 55];

let ageArray = filterArray.filter(eligibleToVote);

function eligibleToVote(num) {
    if(num >= 18) {
        return num;
    }
}

console.log(ageArray);