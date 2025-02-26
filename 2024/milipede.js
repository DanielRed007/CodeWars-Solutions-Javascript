// function solution(words) {
    
//     for(let x = 0; x < words.length; x++){
//         const word = words[x];

//         for(let i = 0){

//         }
//     }

//     console.log(words);

//     return true
// }

// solution(["excavate", "endure", "desire", "screen", "theater", "excess", "night"]);
// // RESULT => Millipede: desirE EndurE ExcavatE ExcesS ScreeN NighT Theater => TRUE
// solution(["screen", "desire", "theater", "excess", "night"]);
// //
// solution(["engine", "endure", "elite", "excess"]);
// //
// solution(["east", "e", "e", "t", "t", "e", "time"]);

function bubbleSort(arr) {
    let n = arr.length;
    for(let i = 0; i < arr.length - 1; i++) {
        
        for(let j = 0; j < arr.length - i - 1; j++) {
            

            if(arr[j] > arr[j+1]) {
                console.log(arr[j] , arr[j+1])

                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let arr = [5, 2, 7, 3, 9, 1, 4, 6, 8];
console.log("Original Array: " + arr);
arr = bubbleSort(arr);
console.log("Sorted Array: " + arr);
  