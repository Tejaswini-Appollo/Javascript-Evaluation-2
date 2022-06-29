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