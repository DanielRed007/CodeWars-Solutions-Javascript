function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i++){
        const value = numbers[i];

        for(let x = 0; x < numbers.length; x++){
            if(value + numbers[x] === target && x !== i){
                return [i,x];
            }
        }
    }
}

twoSum([1,2,3],4); // [0,2]
twoSum([1234,5678,9012],14690); // [1,2]
twoSum([2,2,3],4); // [0,1]
twoSum([2,3,1],4); // [1,2]
