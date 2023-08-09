function selReverse(array, length) {
    if(length > array.length) return array.reverse();

    // let chunks = [];

    // for(let x = 0; x < array.length; x += length){
    //     chunks.push(array.slice(x, x + length));
    // }

    // const reversed = chunks.map(chunk => chunk.reverse()).flat();
    // return reversed;
    const timesDivided = array.length / length;
    // console.log()

    console.log(array.length / length);

    return array
}

selReverse([2,4,6,8,10,12,14,16], 3); // [6,4,2,12,10,8,16,14]
selReverse([1,2,3,4,5,6], 2); // [2,1,4,3,6,5]
selReverse([1,2,3,4,5,6], 10); // [6,5,4,3,2,1]
