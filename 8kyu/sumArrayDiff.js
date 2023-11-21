
function sumOfDifferences(list = []) {
    const diffs = [];
    const desc  = list.sort((a,b) => b - a);

    for(let x = 0; x < desc.length; x++){
        const current = desc[x];
        const next = desc[x +1];

        const max = Math.max(current,next);
        const min = Math.min(current,next);

        if(next){
            diffs.push(max - min);
        }
    }

    const totalDiff = desc.reduce((a,b) => a + b,0);
    console.log(totalDiff);
    return totalDiff;
}

sumOfDifferences([2, 1, 10]); // 9
sumOfDifferences([-3,1,0,-2,1]); // 4