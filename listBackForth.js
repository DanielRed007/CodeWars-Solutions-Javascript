
function arrange(list) {
    let removeCounter = 0;
    let result = [];

    for(let x = 0; x < list.length; x++){
        
        if(removeCounter < list.length / 2){

            if(x % 2 === 0){
                result.push(list[removeCounter],list[list.length - 1 - removeCounter]);
            }
            
            if(x % 2){
                result.push(list[list.length - 1 - removeCounter],list[removeCounter]);
            }

            removeCounter++;
        }
    }

    if(list.length % 2){
        result.pop();
        return result;
    } else {
        return result;
    }
}

arrange([1,2,3,4,5,6]); // [1,6,5,2,3,4]
arrange([9, 7, -2, 8, 5, -3, 6, 5, 1]); // [9, 1, 5, 7, -2, 6, -3, 8, 5]
  