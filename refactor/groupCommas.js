
function groupByCommas(n) {
    const numString = (n).toString().split("").reverse();
    let result = "";

    for(let x = numString.length - 1; x >= 0; x--){
        if(numString[x + 1] && (x + 1) % 3 === 0 && numString.length > 3){
            result += (","  + numString[x]);
        } else {
            result += numString[x];
        }  
    }

    return result;
}

groupByCommas(1); // '1');
groupByCommas(10); // '10');
groupByCommas(100); //  '100');
groupByCommas(1000); //  '1,000');
groupByCommas(10000); //  '10,000');
groupByCommas(100000); // '100,000');
groupByCommas(1000000); // '1,000,000');
groupByCommas(35235235); //  '35,235,235');