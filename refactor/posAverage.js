
function posAverage(numSet = "") {
    const numList = numSet.split(", ");
    let totalOcurrences = 0;

    for(let x = 0; x < numList.length; x++){
        const setX = numList[x];

        for(let y = 0; y < numList.length; y++){
            const setY = numList[y];

            if(setX !== setY){
                console.log(setY, setX, x);
                const listX = setX.split("");
                const listY = setY.split("");

                listY.forEach((valY,idxY) => {
                    
                    listX.forEach((valX,idxX) => {
                        if(valX === valY && idxX === idxY) totalOcurrences++
                    });
                })
            }
        }
    }

    console.log(totalOcurrences);
    return numList;
}

console.log(posAverage("466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096")) // 26.6666666667
console.log(posAverage("6900690040, 4690606946, 9990494604")) // 26.6666666667