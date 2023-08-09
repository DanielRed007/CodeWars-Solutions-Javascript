function sockMerchant(notNeededParam = 0, list = []) {
    const totalSocks = list.length;
    let sockCounter = {};

    for(let i = 0; i < totalSocks; i++){
        const sock = list[i];

        if(sockCounter[sock] >= 1){
            sockCounter[sock]++;
        } else {
            sockCounter[sock] = 1;
        }
    }

    return Object.values(sockCounter).map(val => Math.floor(val / 2)).reduce((prev,next) => prev + next,0);
}

console.log(sockMerchant(0,[1, 2, 1, 2, 1, 3, 2]));
console.log(sockMerchant(0,[10, 20, 20, 10, 10, 30, 50, 10, 20]));