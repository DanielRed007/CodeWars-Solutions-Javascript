
function staircase(n) {
    // Write your code here
    let result = [];

    for(let y = 1; y <= n; y++){
        let row = []
        for(let x = n; x >= 1; x--){
            if(x <= y){
                row.push("#")
            } else {
                row.push(" ");
            }
        }

        result.push(row.join(""));
    }

    console.log(result.join("\n"));
}

staircase(6);