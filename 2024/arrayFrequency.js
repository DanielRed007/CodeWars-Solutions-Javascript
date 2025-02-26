// ugly solution, only simple tests
function solve(list){
  let counter = {};

  for(let i = 0; i < list.length; i++){
      const val = list[i];

      if(counter[val] >= 1){
        counter[val]++
      } else {
        counter[val] = 1;
      }
  }

  // console.log(counter);
  // const hashMap = Object.entries(counter)
  //   .sort((a,b) => b[1] - a[1])
  //   .map(val => {
  //     return new Array(val[1]).fill(Number(val[0]));
  //   })
  //   .reduce((acc, curr) => acc.concat(curr), []);
  

  // console.log(hashMap);
  // return hashMap

  console.log(counter);
  const hashMap = Object.entries(counter)
    .sort((a,b) => b[1] - a[1])
    .map(val => {
      return new Array(val[1]).fill(Number(val[0]));
    })

  let result = [];

  for(let y = 0; y < hashMap.length; y++){
    for(let j = 0; j < hashMap[y].length; j++){
      result.push(hashMap[y][j]);
    }
  }

  console.log(result);
  return result
};

// function solve(list){
//     let dups = [];
//     let numList = [];
//     let vals = list.slice();

//     for(let i = 0; i < vals.length; i++){
//         const val = vals[i];
//         const listSliced = vals.slice(i + 1, vals.length);
//         console.log(val, "current value")
//         console.log(listSliced, "rest of array");
//         // for(let x = 0; x < ){

//         // }
//     }
// }

// function bubbleSort(arr) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       console.log(len - i - 1, "!!!!");
//       for (let j = 0; j < len - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           // Intercambiar elementos
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }

//     console.log(arr);
//     return arr;
// }

// bubbleSort([2,3,5,3,7,9,5,3,7]);

solve([2,3,5,3,7,9,5,3,7]); // [3,3,3,5,5,7,7,2,9]
solve([ 1,
  1,
  3,
  3,
  4,
  5,
  6,
  8,
  9,
  11,
  11,
  11,
  13,
  13,
  17,
  18,
  18,
  18,
  19,
  20,
  22,
  22,
  24,
  25,
  28,
  29,
  30,
  30,
  32,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  47,
  47,
  48,
  48,
  49,
  50 ]) // result [11, 11, 11, 18, 18, 18, 1, 1, 3, 3, 13, 13, 22, 22, 30, 30, 47, 47, 48, 48, 4, 5, 6, 8, 9, 17, 19, 20, 24, 25, 28, 29, 32, 35, 36, 37, 38, 39, 40, 41, 49, 50]
  // real [11, 11, 11, 18, 18, 18, 1, 1, 13, 13, 22, 22, 3, 3, 30, 30, 47, 47, 48, 48, 17, 5, 19, 20, 6, 24, 8, 28, 29, 9, 32, 35, 36, 37, 38, 39, 40, 41, 50, 4, 49, 25]
// solve([1,2,3,0,5,0,1,6,8,8,6,9,1]); // [1,1,1,0,0,6,6,8,8,2,3,5,9]