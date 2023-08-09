function isPrime(number = 0) {     
    for(let i = 0; i <= number - 1; i++){
        if (number % i == 0) {
            return false;
        }
    }

    return true;
}

function nextPrime(n){
    let counter = n;

    while(!isPrime(counter)){
        counter++;
    }

    console.log(counter);
}

nextPrime(0) // 2);
nextPrime(1) // 2);
nextPrime(2) //  3);
nextPrime(3) // 5);
nextPrime(5) // 7);
nextPrime(11) // 13);
nextPrime(17) // 19);
nextPrime(2971) // 2999);