function isPrime(number = 0) {     
    for(let i = 2; i <= number - 1; i++){
        if (number % i == 0) {
            return false;
        }
    }

    return true;
}

function minimumNumber(numbers = []){
    let maxValue = numbers.reduce((a,b) => a + b,0);
    let counter = maxValue;

    while(!isPrime(counter)){
        counter++;
    }

    return counter - maxValue;
}

minimumNumber([3,1,2]); // 1);
minimumNumber([5,2]); // 0);
minimumNumber([1,1,1]); // 0);
minimumNumber([2,12,8,4,6]); // 5);
minimumNumber([50,39,49,6,17,28]); // 2);