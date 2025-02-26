function sortByBit(list = []) {
    const bitList = list.map(num => {
        const bit = (num).toString(2).split("").filter(s => s === "1")
        return [num,bit]
    })
    .sort((a,b) => a[1].length - b[1].length)
    

    console.log(bitList);
}

sortByBit([3, 8, 3, 6, 5, 7, 9, 1]); // [1, 8, 3, 3, 5, 6, 9, 7]
// sortByBit([9,4,5,3,5,7,2,56,8,2,6,8,0]); // [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]