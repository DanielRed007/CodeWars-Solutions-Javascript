function findMultiples1(integer, limit) {
    let multi = [];

    for(let x = 1; x <= limit; x++){
        if(x % integer === 0){
            multi.push(x);
        }
    }

    return multi;
}

function findMultiples(integer, limit) {
    return [...Array(limit + 1).keys()].filter(num => num % integer === 0 && num > 0);
}

findMultiples(5, 25); // [5, 10, 15, 20, 25])
findMultiples(1, 2); // [1, 2])
findMultiples(5, 7); // [5])
findMultiples(4, 27); // [4, 8, 12, 16, 20, 24])
findMultiples(11, 54); // [11, 22, 33, 44])