
function jumpingOnClouds(cloudList = [], cloudStep = 0) {
    let energy = 100;   

    for(let x = 0; x < cloudList.length; x += cloudStep){
        const cloud = cloudList[x];

        if(cloud === 0){
            energy--;
        } else if(cloud === 1){
            energy -= 3;
        }
    }

    return energy;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0],2));
