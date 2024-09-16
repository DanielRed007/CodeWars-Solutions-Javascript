// this solution mutated the original array

function moveZeros(numList = []) {
    const sorted = numList.sort((a,b) => a === 0 || b === 0 ? -1 : 0);
    // console.log(sorted)
    const lastZeroIndex = sorted.lastIndexOf(0);
    // console.log(lastZeroIndex)
    const zeroFrag = sorted.slice(0,lastZeroIndex + 1);
    // console.log(zeroFrag)
    const numsFrag = sorted.slice(lastZeroIndex +1 , sorted.length);
    // console.log(numsFrag);
    return numsFrag.concat(zeroFrag)
}

// not this one

function moveZeros(numList = []) {
    const zeros = numList.filter((num) => num === 0);
    const numbers = numList.filter((num) => num !== 0);
    return numbers.concat(zeros);
};

// option 2

function moveZeros(arr) {
    return arr.sort((a, b) => b === 0 ? -1 : 0);
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]