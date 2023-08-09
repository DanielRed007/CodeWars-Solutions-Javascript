
function breakingRecords(scores = []) {
    const high = [scores[0]]
    const low = [scores[0]];

    for(let x = 0; x < scores.length; x++){
        const current = scores[x];

        if(x > 0){
            
            if(current > high[high.length - 1]){
                high.push(current);
            }

            if(current < low[low.length - 1]){
                low.push(current);
            }

        }
    }

    high.shift();
    low.shift();

    return [high.length,low.length];
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);
