
function getMoneySpent(keyboards = [], drives = [], budget = 0){
    const itemsSum = keyboards.map(val => drives.map(d => d + val));

    return itemsSum.flat().filter(val => val <= budget).sort((a,b) => b - a)[0] || -1;
}

console.log(getMoneySpent([40,50,60],[5,8,12],60));

