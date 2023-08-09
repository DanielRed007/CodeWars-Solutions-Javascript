
function hourglassSum(list = []) {
    const hourglasses = [];
    const glassDataSet = [];

    for(let x = 0; x < list.length; x++){
        if(list[x + 2]){
            const row1 = list[x];
            const row2 = list[x + 1];
            const row3 = list[x + 2];

            hourglasses.push([row1,row2,row3]);
        }
    }

    for(let y = 0; y < hourglasses.length; y++){
        const hourglassSet = hourglasses[y];

        for(let z = 0; z < hourglassSet[0].length; z++){

            if(z <= 3){
                const g1 = hourglassSet[0].slice(z,z + 3).reduce((a,b) => a + b,0);
                const g2 = hourglassSet[1].slice(z,z + 3)[1];
                const g3 = hourglassSet[2].slice(z,z + 3).reduce((a,b) => a + b,0);
                glassDataSet.push(g1 + g2 + g3);
            }
            
        }
    }

    return Math.max(...glassDataSet);
}

hourglassSum([
    [-9,-9,-9,1,1,1],
    [0,-9,0,4,3,2],
    [-9,-9,-9,1,2,3],
    [0,0,8,6,6,0],
    [0,0,0,-2,0,0],
    [0,0,1,2,4,0]
]);

/* 

-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18

*/