function abbreviate(text) {
    
    const regex = /\b\w+\b/g;
  
    const wordList = text.match(regex);
    const nonLetters = text.replace(regex, "").split("");

    console.log(wordList);
    console.log(nonLetters);

    const i18nList = wordList.map((word,i) => {
        if(word.length > 3){
            const i18nWord = word.length - 2;
            // console.log(i18nWord);
            return word[0] + i18nWord + word[word.length - 1];
        } else {
            return word;
        }
    });

    if(nonLetters === null) {
        console.log(i18nList[0])
        return i18nList[0];
    };

    let result = "";

    for(let i = 0; i < i18nList.length; i++){
        let nonChar = "";

        if((nonLetters[i])){
           nonChar = nonLetters[i];
        }

        result += i18nList[i] + nonChar;
    }

    console.log(result);
    return result;
}

// abbreviate("internationalization"); // "i18n"
// abbreviate("accessibility"); // "a11y"
// abbreviate("Accessibility"); // "A11y"
// abbreviate("elephant-ride"); // "e6t-r2e"
// abbreviate("elephant-rides are really fun!"); // "e6t-r3s are r4y fun!"

// hard tests
abbreviate("You need, need not want, to complete this code-wars mission");
//  I'm getting this You n2d, 3d not w2t, to c6e t2s c2e-w2s m5n
//  But i want this: "You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n"

// function abbreviate(text) {
    
//     const regex = /[^a-zA-Z\s]|\b\s\b/g;

//     const wordList = text.split(regex).filter(letters => letters);
//     const nonLetters = text.match(regex);

//     console.log(wordList);

// }
