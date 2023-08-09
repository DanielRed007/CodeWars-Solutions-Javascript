
function arraysSimilar(list1,list2) {
    let data1 = list1.sort((a,b) => a - b);
    let data2 = list2.sort((a,b) => a - b);
  
    if(data1.length !== data2.length) return false;
   
    return (data1.every((val,i) => val === data2[i]));
}

let arr1 = [1, 2, 2, 3, 4];
let arr2 = [2, 1, 2, 4, 3];
let arr3 = [1, 2, 3, 4];
let arr4 = [1, 2, 3, "4"];

arraysSimilar(arr1,arr2); // true
arraysSimilar(arr3,arr4); // false
