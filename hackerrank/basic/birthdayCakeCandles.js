// slow solution
// function birthdayCakeCandles(candles = []) {
//     return candles.filter(candle => candle === Math.max(...candles)).length;
// }

function birthdayCakeCandles(candles = []) {
    const maxHeight = Math.max(...candles);
    let result = 0;

    for(let x = 0; x < candles.length; x++){
        const candle = candles[x];
        if(candle === maxHeight){
            result++
        }
    }

    return result;
}

birthdayCakeCandles([3 ,2 ,1 ,3]);