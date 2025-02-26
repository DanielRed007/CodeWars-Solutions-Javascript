
function divisibleSumPairs(uselessParam, divisor = 0, list = []) {
    let pairs = []

    for(let i = 0; i < list.length; i++){
        const current = list[i];

        for(let y = i + 1; y < list.length; y++){
            pairs.push([current, list[y]]);
        }
    }

    return pairs.filter(val => (val[0] + val[1]) % divisor === 0).length
}

divisibleSumPairs(6,5,[1,2,3,4,5,6]);
