function upArray2(list = []){
    // take the first list and get the final number
    const listNum = list.reduce((acc,val) => acc + val,0);
    // create a new number adding one
    const newNum = listNum + 1;
    // return the new list with the new numbers
    console.log(String(newNum).split("").map((val) => parseInt(val)));
    return String(newNum).split("").map((val) => parseInt(val)); 
}

// solved

// function upArray(list){
//     // console.log(list);
//     const isBigOrNegative = list.find(num => num < 0 || num > 9);
//     // console.log(isBigOrNegative);
//     if(isBigOrNegative || list.length === 0){
//         return null;
//     } else {
//         // console.log(BigInt(list.join("")))
//         const upNum = (BigInt(list.join("")) + BigInt(1)).toString();
//         console.log(upNum.split("").map(char => parseInt(char)));
//         return upNum.split("").map(char => parseInt(char));
//     }
// }

function upArray(list = []){
    // take the first list and get the final number

    const isBigOrNegative = list.find(num => num < 0 || num > 9);

    if(isBigOrNegative || list.length === 0){
        return null;
    } else {
        const numList = list.map((val) => val.toString()).join("")
    const newNum = ((+numList) + 1).toString().padStart(numList.length, '0')

    console.log(newNum.split("").map((val) => parseInt(val)))
    // create a new number adding one
    return newNum.split("").map((val) => parseInt(val))
    }
    // return the new list with the new numbers
}

upArray([4,3,2,5]); // [4,3,2,6]);
upArray([2,3,9,9]); // [2,4,0,0]);
upArray([9,9]); // [1,0,0]);
upArray([0,7]); // [0,8]);
upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]); // [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,1]);