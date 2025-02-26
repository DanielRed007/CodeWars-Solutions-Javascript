
function miniMaxSum(arr) {
    // Write your code here
    let sumList = [];

    for(let x = 1; x < arr.length + 1; x++){
        const partial = arr.filter((y,i) => (i + 1) !== x).reduce((acc,nxt) => acc + nxt,0);
        sumList.push(partial);
    }   

    console.log(Math.min(...sumList) + " " + Math.max(...sumList))
}

// miniMaxSum([1,2,3,4,5]);
miniMaxSum([7,69,2,221,8974]);