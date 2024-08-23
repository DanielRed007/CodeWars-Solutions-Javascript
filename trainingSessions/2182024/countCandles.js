function birthdayCakeCandles(candles = []) {
    const biggestCandle = Math.max(...candles)
    let result = 0;

    for(let x = 0; x < candles.length; x++){
        const candle = candles[x];
        if(candle === biggestCandle){
            result++
        }
    }

    return result;
}

// This solution works, but it's not performant
function birthdayCakeCandles2(candles = []) {
    return candles.filter((val) => val === Math.max(...candles)).length;
}

// this is an improved approach
function birthdayCakeCandles3(candles = []) {
    const biggestCandle = Math.max(...candles);
    return candles.filter(val => val === biggestCandle).length;
}

birthdayCakeCandles([3, 2, 1, 3]);