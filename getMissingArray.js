function getLengthOfMissingArray(dataList) {
  
    if (
      dataList === null ||
      dataList.length === 0 ||
      !dataList ||
      dataList.some(arr => !Array.isArray(arr) || arr.length === 0)
    ) {
      return 0;
    }
  
    let values = [];
  
    for(let i = 0; i < dataList.length; i++){
        values.push(dataList[i].length);
    }

    let orderedIndexes = values.slice().sort((a,b) => a - b);    
    let finalValues = [];

    for(let x = orderedIndexes[0]; x <= orderedIndexes[orderedIndexes.length - 1]; x++ ){
        finalValues.push(x);
    }

    const sortedVal = values.reduce((acc,next) => acc + next,0);
    const orderedVal = finalValues.reduce((acc,next) => acc + next,0);

    return orderedVal - sortedVal;
}

getLengthOfMissingArray([[ 1, 2 ],[ 4, 5, 1, 1 ],[ 1 ],[ 5, 6, 7, 8, 9 ]]); // 3
getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1, 5, 6 ], [ 1, 1 ], [ 5, 6, 7, 8, 9 ] ]); // 4
getLengthOfMissingArray([
    [],
    [ 0 ],
    [ 2, 2 ],
    [ 3, 3, 4 ],
    [ 2, 2, 4, 4 ],
    [ 4, 4, 4, 0, 4 ],
    [
      2, 3, 0, 2,
      4, 2, 1
    ]
  ]);

getLengthOfMissingArray([]);