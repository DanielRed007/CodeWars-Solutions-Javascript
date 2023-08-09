const sumSquareEvenRootOdd = (nums = []) => {
    return parseFloat(nums.map(num => {
        return num % 2 === 0 ? Math.pow(num,2) : Math.sqrt(num);
    }).reduce((acc,next) => acc + next ,0).toFixed(2));
};

sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]);