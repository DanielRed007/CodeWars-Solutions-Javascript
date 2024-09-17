// With one argument, every(array) returns every element of the array.

// With two arguments, every(array, interval) it returns every intervalth element.

// With three arguments, every(array, interval, start_index) returns every intervalth element starting at index start_index.

function every(list = [], interval, start = 0){
    if(!interval && !start){
        return list;
    }

    let result = [];

    for(let x = start; x < list.length; x += interval){
        result.push(list[x])
    }

    return result;
}

every([0,1,2,3,4]); // [0,1,2,3,4])
every([0,1,2,3,4],1); // [0,1,2,3,4])
every([0,1,2,3,4],2); // [0,2,4])
every([0,1,2,3,4],3); // [0,3])
every([0,1,2,3,4],3,1); // [1,4])

// ------------------------------------------ Array Extension ------------------------------------ //

// With no arguments, array.every it returns every element of the array.
// With one argument, array.every(interval) it returns every intervalth element.
// With two arguments, array.every(interval, start_index) it returns every intervalth element starting at index start_index
