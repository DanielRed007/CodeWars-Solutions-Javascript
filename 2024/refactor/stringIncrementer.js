function incrementString(text = ""){
    const charList = text.split("").reverse();
    let revIdx = charList.findIndex(i => /[a-zA-Z]/.test(i));
    let stIdx = 0;

    if(revIdx <= 0){
        if(!/[0-9]/.test(text)){
            return text + "1";
        } else {
            const addedNum = parseInt(text,10) + 1;
            return addedNum.toString().padStart(text.length,"0");
        }
    }

    if(revIdx > 0){
        stIdx = (text.length) - revIdx;
        const alpha = text.slice(0,stIdx);
        const nums = text.slice(stIdx,text.length);
        const addedNum = parseInt(nums,10) + 1;
        const finalNum = addedNum.toString().padStart(nums.length,"0");

        return alpha + finalNum;
    }
}

console.log(incrementString("foobar000"));
console.log(incrementString("foobar001"));
console.log(incrementString("foo")); // foo1
console.log(incrementString("foobar000"));
console.log(incrementString("009")); // 010
console.log(incrementString("fo99obar99")); // "fo99obar100"

// doTest("foobar000", "foobar001");
// doTest("foobar999", "foobar1000");
// doTest("foobar00999", "foobar01000");
// doTest("foo", "foo1");
// doTest("foobar001", "foobar002");
// doTest("foobar1", "foobar2");
// doTest("1", "2");
// doTest("009", "010");
// doTest("fo99obar99", "fo99obar100");