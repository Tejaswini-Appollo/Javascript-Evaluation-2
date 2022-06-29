function primeNumbers(num) {
    for(let i = 2; i <= num; i++) {
        if(num % i !== 0) break;
        else return num;
    }
}

for(let i = 1; i <= 5; i++) {
    console.log(primeNumbers(i));
}