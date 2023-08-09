function snail(list){
    let pattern = [];

    let startRow = 0;
    let endRow = list[0].length - 1;
    let startCol = 0;
    let endCol = list[0].length - 1;
    let numValues = list.slice();

    while(startRow <= endRow && startCol <= endCol){
        const topRow = numValues[startRow];
        const bottomRow = numValues[endRow];
        
        for(let i = 0; i < topRow.length; i++){
            pattern.push(topRow[i]);
        }

        

        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }

    console.log(pattern);
}

// snail([
//     [1, 2, 3], 
//     [4, 5, 6], 
//     [7, 8, 9]
// ]); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10], 
    [11, 12, 13, 14, 15], 
    [16, 17, 18, 19, 20], 
    [21, 22, 23, 24, 25]
]); // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]