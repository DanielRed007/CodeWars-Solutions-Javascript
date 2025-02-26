function isEven (x) {
    return Math.abs(x) % 2 === 0;
}
  
const arr = [2,4,6,1,8,10];
  
function span(list,cb){
    let idx = null;

    for(let i = 0; i < list.length; i++){
        if(cb(list[i])){
            idx++
        } else {
            break;
        }
    }

    const validHalf = list.slice(0,idx)
    const rest = list.slice(idx);

    return [validHalf,rest];
}

span(arr,isEven);