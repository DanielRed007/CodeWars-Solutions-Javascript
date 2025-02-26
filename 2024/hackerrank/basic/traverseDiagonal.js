
function diagonalDifference(arr) {
    let left = [];
    let right = [];

    for(let x = 0; x < arr.length; x++){
        const leftRow = arr[x];
        const leftVal = leftRow.find(val => val === leftRow[x])
        left.push(leftVal);
    }

    for(let y = arr.length - 1; y >= 0; y--){
        const rightRow = arr[y].reverse();
        const rightVal = rightRow.find(val => val === rightRow[y])
        right.push(rightVal);
    }

    const lDiag = left.reduce((acc,next) => acc + next ,0);
    const rDiag = right.reduce((acc,next) => acc + next ,0);

    return Math.abs(lDiag - rDiag);
}

console.log(diagonalDifference([
    [11 ,2 ,4],
    [4 ,5 ,6],
    [10 ,8 ,-12]
]));