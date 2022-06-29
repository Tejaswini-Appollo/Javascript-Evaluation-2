const arr = [1, 2, 3, 5, 6];

let maxValue = Math.max(...arr);

for(let i = 1; i <= maxValue; i++) {
    if(!arr.includes(i)) {
        console.log(i);
    }
}    