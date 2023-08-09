function getFibonacciValue(seq = []){
    return seq.slice(-2).reduce((prev,nxt) => prev + nxt, 0);
}

function productFib(product = 0){
    let fibonacci = [0,1];
    let fibProduct = null;
    let result = [];
    let nextValue = 0;

    while(fibProduct <= product){
        const fibNums = fibonacci.slice(-2);
        nextValue = getFibonacciValue(fibonacci);
        fibonacci.push(nextValue);
        fibProduct = fibNums[0] * fibNums[1];
        

        if(fibProduct > product){
            fibonacci.pop();
            fibonacci = fibonacci.slice(-2);
            result = [fibNums[0],fibNums[1],false];
            break;
        }

        if(fibProduct === product){
            result = [fibNums[0],fibNums[1],true];
            break;
        }

    }

    return result;
}

productFib(714); // [21,34,true]
productFib(4895); // [55, 89, true])
productFib(5895); // [89, 144, false])
productFib(74049690); // [6765, 10946, true])
productFib(84049690); // [10946, 17711, false])
productFib(193864606); // [10946, 17711, true])
productFib(447577); // [610, 987, false])
productFib(602070); // [610, 987, true])