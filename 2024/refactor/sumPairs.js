// function sumPairs(ints = [], sum = 0) {
//     let pairs = [];

//     for(let x = 0; x < ints.length; x++){
//         let current = ints[x];

//         for(let y = x + 1; y < ints.length; y++){
            
//             if((current + ints[y]) === sum){
//                 pairs.push([current, ints[y]]);
//             }
//         }
//     }

//     pairs = pairs.sort((a,b) => a[0] - b[0])[0];
    
//     if(pairs){
//         return pairs;
//     }
// }

function sumPairs(ints = [], sum = 0) {
    ints.sort((a, b) => a - b);

    let left = 0;
    let right = ints.length - 1;
    let pairs = [];

    while (left < right) {
        let currentSum = ints[left] + ints[right];

        if (currentSum === sum) {
            pairs.push([ints[left], ints[right]]);
            left++;
            right--;
        } else if (currentSum < sum) {
            left++;
        } else {
            right--;
        }
    }

    return pairs;
}


sumPairs([11, 3, 7, 5],10); // [3, 7]
sumPairs([1, 4, 8, 7, 3, 15], 8); // [1, 7]
sumPairs([1, -2, 3, 0, -6, 1], -6); // [0, -6]
sumPairs([20, -13, 40], -7); // undefined
sumPairs([1, 2, 3, 4, 1, 0], 2); // [1, 1]
sumPairs([10, 5, 2, 3, 7, 5], 10); // [3, 7]
sumPairs([4, -2, 3, 3, 4], 8); // [4, 4]
sumPairs([0, 2, 0], 0); // [0, 0]
sumPairs([5, 9, 13, -3], 10); // [13, -3]
