
function findDigits(int = 0) {
    let divisors = 0;

    const nums = int.toString().split("").map(i => parseInt(i));

    for(let i = 0; i < nums.length; i++){
        if(int % nums[i] === 0){
            divisors++
        }
    }

    return divisors;
}