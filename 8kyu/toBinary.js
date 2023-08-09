
function toBinary(num){
    let binaryList = [];

    while(num > 0){        
        let quotient = Math.floor(num / 2);
        let remainder = num % 2;
        num = quotient;
        binaryList.push(remainder);
    }

    return Number(binaryList.reverse().join(""));
}

toBinary(23); // 10111
toBinary(1); // 1
toBinary(2); // 10
toBinary(3); // 11
toBinary(5); // 101
// toBinary(11);