// function find(array, element) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//         if (array[i] === element) return i;
//     }
//     return "Not found";
// }

function find(arr, elem) {
    let idx = arr.findIndex(val => val === elem);
    console.log(idx);
    return "Not found";
}

const array = [2,3,5,7,11];
find(array, 5); // 2