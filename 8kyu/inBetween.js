
function between(a, b) {
    let result = [];

    for(let x = a; x <= b; x++){
        result.push(x);
    }

    return result;   
}

between(1, 4); // [1, 2, 3, 4]));
between(-2, 2); // [-2, -1, 0, 1, 2]));