
function birthday(segment = [], day = 0, month = 0) {
    let result = 0;

    for(let i = 0; i < segment.length; i++){
        const segCount = segment.slice(i,month + i).reduce((a,b) => a + b,0)
        
        if(segCount === day){
            result++;
        }
    }

    return result;
}

birthday([2,2,1,3,2],4,2);