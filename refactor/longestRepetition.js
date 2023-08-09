
function longestRepetition(text = "") {
    if(text === "") return ["",0];

    const charList = text.match(/(\w)\1*/g);
    const lengthValues = charList.map(val => val.length);
    const maxLength = Math.max(...lengthValues);

    const maxValues = charList.filter(chars => chars.length === maxLength).map(val => [val[0],val.length]);
    return maxValues[0];
}

longestRepetition("aaaabb"); //      ["a",4] );
longestRepetition("bbbaaabaaaa"); // ["a",4] );
longestRepetition("cbdeuuu900"); //  ["u",3] );
longestRepetition("abbbbb"); //      ["b",5] );
longestRepetition("aabb"); //        ["a",2] );
longestRepetition(""); //            ["",0] );
longestRepetition("ba"); //          ["b",1] );