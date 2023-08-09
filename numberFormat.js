
function numberFormat(number){

    const numText = (number).toString().split("").reverse();

    for(let i = 0; i <= numText.length; i+= 3){

        if(i % 3 === 0 && i !== 0 && i !== numText.length && numText[i] !== "-"){
            const temp = numText[i] + ",";
            numText[i] = temp;
        }
    }    

    const result = numText.reverse().join("");

    return result;
}

numberFormat(100000); // '100,000'
numberFormat(100100); // '100,100'
numberFormat(5678545); // '5,678,545'
numberFormat(-420902); // 