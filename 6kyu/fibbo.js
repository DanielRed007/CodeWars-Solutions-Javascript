
function nthFibo(n) {
    let fibbo;
    let sequence = [0,1];

    for(let x = 0; x < n; x++){    
        fibbo = sequence[sequence.length - 1] + sequence[sequence.length - 2]
        sequence.push(fibbo)
    }

    return sequence[n - 1];
}

nthFibo(1) // 0,"1-st Fibo");
nthFibo(2) // 1,"2-nd Fibo");
nthFibo(3) // 1,"3-rd Fibo");
nthFibo(4) // 2,"4-th Fibo");