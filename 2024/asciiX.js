function x(n){
    //have fun :)
    // ■
    // □
    let result = [];

    for(let x = 1; x <= n; x++){
        let left = 1;
        let right = n;
        let row = [];

        for(let y = 1; y <= n; y++){
            
            if(x % 2){
                
                // if(y === right || y === left){
                //     row.push("■");
                //     left++;
                //     right--;
                // } else {
                //     row.push("□");
                // }

            }

            if(x % 2 === 0){
                // row.push("■");
            }

            
            // if(y < n / 2){
            //     console
            // }

            console.log(left, "left");
            console.log(right, "right");
        }
        
        
        // console.log(row);
        result.push(row);
    }
    console.log(result);
}

x(5);