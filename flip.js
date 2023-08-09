function flip(direction,blocks){
    if(direction === "R"){
        return blocks.sort((a,b) => a - b);
    }

    if(direction === "L"){
        return blocks.sort((a,b) => b - a);
    }
}

function index(array, n){
    if(array[n]){
        return Math.pow(array[n],n);
    } 
    
    return - 1; 
}

function index(array, n){    
    return array[n] ? Math.pow(array[n],n) : -1; 
}

