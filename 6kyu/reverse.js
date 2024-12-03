
function spinWordsV1(text = ""){
    // split the word by the blank space to create a list
    const txt = text.split(" ");

    // iterate the list to detect words equal or longer than five and reverse only those words
    const reversedList = txt.map((word,index) => {
        if(word.length >= 5){
            const rev = word.split("").reverse().join("");
            return rev;
        }

        return word;
    });
    
    // return the result
    return reversedList.join(" ");
}

function spinWords(text = ""){
    // split the word by the blank space to create a list
    const txt = text.split(" ");

    // iterate the list to detect words equal or longer than five and reverse only those words
    for(let i = 0; i < txt.length; i++){
        const word = txt[i];

        if(word.length >= 5){
            const temp = word.split("").reverse().join("");
            txt[i] = temp;
        }
    }

    // return the result
    return txt.join(" ");
}

spinWords("Welcome"); // , "emocleW");
spinWords("Hey fellow warriors"); // "Hey wollef sroirraw");
spinWords("This is a test"); // "This is a test");
spinWords("This is another test"); // "This is rehtona test");
spinWords("You are almost to the last test"); // "You are tsomla to the last test");
spinWords("Just kidding there is still one more"); // "Just gniddik ereht is llits one more");
spinWords("Seriously this is the last one"); // "ylsuoireS this is the last one");