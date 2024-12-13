

function tribonacci(signature = [],n = 0){
    if(n === 0) return [];
    
    if(n <= signature.length){
      return signature.slice(0,n)
    }
  
    const totalLength = n - signature.length;

    for(let x = 0; x < totalLength; x++){
        const fib = signature[signature.length - 3] + signature[signature.length - 2] + signature[signature.length - 1];
        signature.push(fib);
    }

    return signature;
}

tribonacci([1,1,1], 10); // [1,1,1,3,5,9,17,31,57,105]
tribonacci([0,0,1], 10); // [0,0,1,1,2,4,7,13,24,44]
tribonacci([0,1,1], 10); // [0,1,1,2,4,7,13,24,44,81]
tribonacci([1,1,1], 1); // [1]
tribonacci([300,200,100], 1); // []
