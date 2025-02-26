
function createNDimensionalArray(nth,size){
    let level = [];

    while(size > 0){
        for(let x = 0; x < size; x++){
            if(size > 1){
                level.push([]);
            }
        }

        size--;
    }

    console.log(level);
}

createNDimensionalArray(1,2); //, ['level 1', 'level 1']
createNDimensionalArray(1,3); //, ['level 1', 'level 1', 'level 1']
createNDimensionalArray(2,2); //, [['level 2', 'level 2'], ['level 2', 'level 2'],]