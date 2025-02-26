function turnInsideOut(word){
    if(word.length % 2 === 0){
        const half1 = word.substring(0,word.length / 2).split("").reverse().join("");
        const half2 = word.substring(word.length / 2, word.length).split("").reverse().join("");
        return half1 + half2;
    } else {
        const half1 = word.substring(0,word.length / 2).split("").reverse().join("");
        const middle = Math.floor(word.length / 2);
        const half2 = word.substring((word.length + 1) / 2, word.length).split("").reverse().join("");
        return half1 + word[middle] + half2;
    }
}

function insideOut(sentence){
    const tearUp = sentence.split(" ").map(word => word.length > 3 ? turnInsideOut(word) : word).join(" ");
    return tearUp;
}

insideOut('man i need a taxi up to ubud'); // 'man i ende a atix up to budu'
insideOut('what time are we climbing up the volcano'); // 'hwta item are we milcgnib up the lovcona'