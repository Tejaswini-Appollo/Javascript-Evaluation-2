let primeNumber = [];

function isPrimeNumber(num) {
    if(num == 1) {
        return "1 is neither prime nor composite number."
    }
    else {
        let flag = 0;
        for(let k = 2; k < num; k++) {
            if(num % k == 0) {
                flag = 1;
                break;
            }
        }
        if(flag == 0) {
            primeNumber.push(num);
        }
    }
}

for(let i = 1; i <= 200; i++) {
    isPrimeNumber(i);
}

console.log(primeNumber);