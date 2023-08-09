function cutTheSticks(numList = []) {
    let stickCount = numList.slice(); 
    const cutData = [];

    for(let x = 0; x < numList.length; x++){
        const min = Math.min(...stickCount);
        cutData.push(stickCount.length);

        stickCount = stickCount.map(st => {
            return st - min;
        }).filter(val => val > 0);
    }

    return cutData.filter(val => val > 0)
}

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));
