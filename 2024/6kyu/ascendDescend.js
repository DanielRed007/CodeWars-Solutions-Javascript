
function ascendDescend(len, min ,max) {
    let result = "";
    let counter = min;

    // while(result.length < len){
    //     result += counter;
    //     counter++;
    //     // while counter is less or equal to max i use increaser
    //     console.log(counter, "====");
    //     if(counter < max){

    //     }


    //     if(counter > max){
    //         counter = max - 1;
    //         counter--;
    //     }

    //     console.log(counter, "!!")
    // }

    for(let x = 0; x < len; x++){

        if(counter <= max){
            counter++;
        }

        if(counter > max){
            counter--;
        }

        console.log(counter);
    }

    console.log(counter);

    return "";
}

ascendDescend(5, 1, 3); // "12321"
// ascendDescend(14, 0, 2); // "01210121012101"