
function isIntArray(arr) {
    if(!arr) return false;  
  
    if(arr.length === 0){
        return true;
    }

    for(let i = 0; i < arr.length; i++){
        if(!Number.isInteger(arr[i])){
            return false;
        }
    }
    
    return true;
}