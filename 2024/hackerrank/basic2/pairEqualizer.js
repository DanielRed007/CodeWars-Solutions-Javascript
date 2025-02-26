
function pairEqualizer(n, list = []) {
    let counter = {};

    for(let x = 0; x < list.length; x++){
        const sock = list[x];

        if(counter[sock] > 0){
            counter[sock]++
        } else {
            counter[sock] = 1
        }
    }

    return Object.values(counter).map(val => Math.floor(val / 2)).reduce((acc,val) => acc + val,0)
}

pairEqualizer(9,[10, 20, 20, 10, 10, 30, 50, 10, 20])