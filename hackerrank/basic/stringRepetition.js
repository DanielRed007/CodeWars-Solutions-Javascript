

function repeatedString(chars = "", repNumber = 0) {
    let totalChars = 0;

    const occurrences = chars.split("").filter(val => val === "a").length;
    const divisible = Math.floor(repNumber / chars.length);
    
    totalChars += (occurrences * divisible)

    if(divisible * chars.length === repNumber){
        return totalChars;
    } else {
        totalChars += chars.slice(0,repNumber - (divisible * chars.length)).split("").filter(val => val === "a").length;
    }

    return totalChars;
}

console.log(repeatedString("aba",10)); // 7
console.log(repeatedString("abcac",10)); // 4
console.log(repeatedString("a",1000000000000)); // 1000000000000
console.log(repeatedString("kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm", 736778906400)); // 51574523448
console.log(repeatedString("aab",882787)); // 588525
console.log(repeatedString("bcbccacaacbbacabcabccacbccbababbbbabcccbbcbcaccababccbcbcaabbbaabbcaabbbbbbabcbcbbcaccbccaabacbbacbc",649606239668)); // 162401559918