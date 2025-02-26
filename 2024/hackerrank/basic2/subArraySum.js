
function subArraySum(list = [], total = 0, distance = 0) {
    let result = 0;

    for(let x = 0; x < list.length; x++){
        const segment = list.slice(x,distance + x).reduce((acc,val) => acc + val,0);
        
        if(segment === total) result++
    }

    return result;
}

birthday([2,2,1,3,2], 4, 2)