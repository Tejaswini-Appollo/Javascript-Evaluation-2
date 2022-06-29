const arr1 = [1, 2, 3, 5, 6, 7];
const arr2 = [6, 7];

const commonValue = [];

arr1.forEach(num1 => {
    arr2.forEach(num2 => num1 === num2 && commonValue.push(num1))
})

console.log(commonValue);