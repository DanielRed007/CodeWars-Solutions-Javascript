
function orderWeight(weightList) {
    const list = weightList.split(" ");
    const toNumber = (num) => num.split("").reduce((acc,curr) => parseInt(acc) + parseInt(curr),0);

    return list.sort((a,b) => {
        if(toNumber(a) < toNumber(b)){
            return -1
        }

        if(toNumber(a) === toNumber(b)) {
            return a.localeCompare(b)
        }
    }).join(" ");
}

orderWeight("56 65 74 100 99 68 86 180 90"); // "100 180 90 56 65 74 68 86 99"