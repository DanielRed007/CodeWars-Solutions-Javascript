
function spinWords(string){
    return string.split(" ").map(char => {
        console.log(char.split(""));
        return char.length >= 5 ? 
            char.split("").reverse().join("") : char;
    }).join(" ");
}

spinWords("You are almost to the last test");