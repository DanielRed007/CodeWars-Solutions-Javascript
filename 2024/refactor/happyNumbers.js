function isHappy(number = 0) {
    const numTracker = [];

    while(number > 0){
        number = getSquares(number);
        numTracker.push(number);
        
        if(number === 1){
            return true;
        }

        const track = numTracker.filter(n => n === number);
        if(track.length === 2){
            return false;
        }
    }
}

console.log(isHappy(1))
console.log(isHappy(7)) // 7, 49, 97, 130, 10, 1 
console.log(isHappy(16))

function getSquares(number = 0){
    return (number).toString().split("").map(val => {
        const int = parseInt(val);
        return Math.pow(int,2);
    }).reduce((acc,nxt) => acc + nxt,0);
}