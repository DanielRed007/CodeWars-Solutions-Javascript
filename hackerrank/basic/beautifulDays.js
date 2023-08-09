
function beautifulDays(i = 0, j = 0, k = 0) {
    let days = 0;

    for(let x = i; x <= j; x++){

        const reverseInt = parseInt(x.toString().split("").reverse().join(""));
        const diff = x - reverseInt;

        if(diff % k === 0) days++;
    }

    return days;
}

beautifulDays(20,23,6);