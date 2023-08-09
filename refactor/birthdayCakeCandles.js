
function birthdayCakeCandles(candles = []) {
    const maxCandleHeight = Math.max(...candles);

    const tallest = candles.filter(candle => candle !== maxCandleHeight);
    console.log(tallest);
}

birthdayCakeCandles([3 ,2 ,1 ,3]);