function incrementString(text){
    const splitter = /[0-9]/i;

    const splitIndex = text.search(splitter);

    if(splitIndex === -1){
        return text + 1
    }

    let chars = text.slice(0,splitIndex);
    let nums = text.slice(splitIndex);

    let addedNum = parseInt(nums,10);
    addedNum++;

    let result = addedNum.toString().padStart(nums.length,"0");

    return chars + result;
}

console.log(incrementString("foobar000"));
console.log(incrementString("foobar001"));
console.log(incrementString("foo"));
console.log(incrementString("foobar000"));
console.log(incrementString("003"));
console.log(incrementString("fo99obar99")); // "fo99obar100"