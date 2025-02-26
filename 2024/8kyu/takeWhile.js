
function isEven(num) {
    return num % 2 === 0;
}
  
function isOdd(num) {
    return num % 2 !== 0;
}

function takeWhile(arr, pred) {
    let prefix = [];

    for(let i = 0; i < arr.length; i++){
        if(!pred(arr[i])) break;

        if(pred(arr[i]) && (pred(arr[i - 1]) || pred(arr[i + 1]))){
            prefix.push(arr[i]);
        } 
    }

    return prefix;
}

takeWhile([2,6,4,10,1,5,4,3],isEven); // [2,6,4,10]
takeWhile([2,100,1000,10000,5,3,4,6],isEven); // [2,100,1000,10000]
takeWhile([998,996,12,-1000,200,0,1,1,1],isEven); // [998,996,12,-1000,200,0]
