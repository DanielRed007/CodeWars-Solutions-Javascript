
function compareTriplets(a, b) {
    let result = [0,0];

    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            result[0]++
        } 
        
        if(a[i] < b[i]){
            result[1]++
        }
    }

    return result;
}

compareTriplets([5,6,7],[3,6,10]); // [1,1]