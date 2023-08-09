function addArrays(list1 = [], list2 = []) {
    let listNum1 = list1.join("").trim();
    let listNum2 = list2.join("").trim();

    if(!listNum1){
        listNum1 = 0;
    } else {
        listNum1 = parseInt(listNum1);
    }

    if(!listNum2){
        listNum2 = 0;
    } else {
        listNum2 = parseInt(listNum2);
    }

    if(listNum1 === 0 && listNum2 === 0) return [];
  
    let stringSum = (listNum1 + listNum2).toString().split("");

    if(stringSum[0] === "-"){
        stringSum.shift();
        stringSum = stringSum.map((v,i) => i === 0 ? "-" + v : v).map(s => parseInt(s));
    } else {
        stringSum = stringSum.map(v => parseInt(v))
    }

    return stringSum;
}
// [3,2,9],[1,2] --> [3,4,1]
// [4,7,3],[1,2,3] --> [5,9,6]
// [1],[5,7,6] --> [5,7,7]
// [3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -3962
// [ 6, 7 ] !! [ 6, 7 ] ##
// [ 6, 7 ] !! [] ##
console.log(addArrays([3,2,9],[1,2])); // [3,4,1]
console.log(addArrays([4,7,3],[1,2,3])); // [5,9,6]
console.log(addArrays([1],[5,7,6])); // [5,7,7]
console.log(addArrays([3,2,6,6],[-7,2,2,8])); // [-3,9,6,2]
console.log(addArrays([6,7],[6,7])); // 134
console.log(addArrays([6,7],[])); // 67
console.log(addArrays([],[]))

