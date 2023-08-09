
function mirror(text){
    const wordList = text.split(" ");
    const longest = text.split(" ").sort((a,b) => b.length - a.length)[0];
    const charFill = Array(longest.length + 4).fill("*").join('');

    wordList.unshift(charFill + "\n");
    wordList.push(charFill);

    return wordList.map((val,index) => {
        let reversed;

        if(index !== 0 && index !== wordList.length - 1){
            reversed = val.split("").reverse();

            reversed = "* " + reversed.join("");
            const alignFill = Array.from({length: longest.length - reversed.length + 2}, () => " ").join("");
            reversed = reversed + alignFill + " *\n";

            return reversed;
        } else {
            return val;
        }
    }).join("");
}

mirror('Hello World');
mirror('La Isla Bonita');