function maxProduct(a) {
    const nums = a.sort((x,y) => y - x ).slice(0,2);
    let result = 0;

    for(let x = 0; x < nums.length; x++){
        result += nums[x];
    }
    
    return result;
}