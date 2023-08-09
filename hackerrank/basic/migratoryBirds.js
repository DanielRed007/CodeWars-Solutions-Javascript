
function migratoryBirds(birdTypes = []) {
    const birdCounter = {};

    for(let x = 0; x < birdTypes.length; x++){
        const birdType = birdTypes[x];

        if(birdCounter[birdType] >= 1){
            birdCounter[birdType]++;
        } else {
            birdCounter[birdType] = 1;
        }
    }

    const maxValueType = Math.max(...Object.values(birdCounter));
    const maxValue = Object.entries(birdCounter).filter(val => val[1] === maxValueType);

    return parseInt(maxValue[0][0]);
}

console.log(migratoryBirds([1,1,2,2,3]));
console.log(migratoryBirds([1,4,4,4,5,3]));

