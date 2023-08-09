
function equalizeArray(list = []) {
    const uniques = [...new Set(list)];
    let mins = [];

    for(let x = 0; x < uniques.length; x++){
        const vals = list.filter(v => v === uniques[x]);
        const minValue = list.length - vals.length;

        mins.push(minValue);
    }

    return Math.min(...mins);
}

console.log(equalizeArray([3, 3, 2, 1, 3])); // 2
console.log(equalizeArray([1, 2, 3, 1, 2 ,3, 3, 3])); // 4