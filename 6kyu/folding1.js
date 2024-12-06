
// Solution 1

function foldArray(array = [], runs = 0){
    let mixList = array;

    for(let x = 1; x <= runs; x++){
        const half = Math.ceil((mixList.length) / 2);

        const h1 = mixList.slice(0,half)
        const h2 = mixList.slice(half, mixList.length).reverse()

        mixList = h1.map((num,index) => {
            const hVal = h2[index];

            if(hVal){
                return num + hVal;
            }

            return num;
        });
    }

    return mixList;
}

console.log(foldArray([ 1, 2, 3, 4, 5 ], 1))
console.log(foldArray([ 1, 2, 3, 4, 5 ], 2))
console.log(foldArray([ 1, 2, 3, 4, 5 ], 3))