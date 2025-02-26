
function cubeOdd(list = []) {
    return list.some(val => !Number.isInteger(val)) ? undefined : 
    list.map(num => Math.pow(num,3)).filter(num => num % 2).reduce((acc,nxt) => acc + nxt, 0)
}

console.log(cubeOdd([1, 2, 3, 4])); // 28);
console.log(cubeOdd([-3,-2,2,3])); // 0);
console.log(cubeOdd(["a",12,9,"z",42])); // undefined);