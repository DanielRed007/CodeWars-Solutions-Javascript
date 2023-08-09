
function countApplesAndOranges(start, end, appleDis, orangeDis, apples = [], oranges = []) {
    let appleCount = 0;
    let orangeCount = 0;

    for(let x = 0; x < apples.length; x++){
        const apple = apples[x] + appleDis;

        if(apple >= start && apple <= end){
            appleCount++;
        }
    }

    for(let x = 0; x < oranges.length; x++){
        const orange = oranges[x] + orangeDis;

        if(orange <= end && orange >= start){
            orangeCount++;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);
}

countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4]);