
function selectionSort(list){
    for(let i = 0; i < list.length; i++){
        let low = i;

        for(let j = i + 1; j < list.length; j++){
            if(list[j] < list[low]){
                low = j;
            }
        }

        if(i !== low){
            let temp = list[i];
            list[i] = list[low];
            list[low] = temp;
        }

    }

    return list;
}



selectionSort([31,35,76,7,21,98,6,1,9,17]);