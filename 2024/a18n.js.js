// word reducer for long words
function a10nReducer(word){
    return word[0] + (word.length - 2) + word[word.length - 1];
}

function abbreviate(text) {
    // split text in spaces
    const wordList = text.split(" ");

    // return words below 4 length intact, otherwise first verification for word reduction
    const newList = wordList.map((word,i) => {
        // final word result
        let newWord = "";

        // short words return intact
        if(word.length < 4){
            newWord = word;
        } else {
            // regex to find words with inner characters
            const regex = /[^a-zA-Z\s]|\b\s\b/g;

            // split and divide words and chars
            const wordList = word.split(regex).filter(letters => letters);
            const nonLetters = word.match(regex);

            // if non letters return intact and apply reducer
            if(!nonLetters){
                newWord = a10nReducer(word);
            } else {
                // split inner words with nonalpha chars
                const splitInnerWord = wordList.map((w,i) => {
                    let inner = "";
                    // if word greater than 4 apply reducer
                    if(w.length >= 4){
                        inner = a10nReducer(w);
                    }
                    
                    // if single word return plus char
                    if(w.length < 4 && nonLetters){
                        return w + nonLetters[i];
                    } else {
                        // otherwise return plus character
                        return nonLetters[i] ? inner + nonLetters[i] : inner;
                    }
                }).join("");

                // merge
                newWord = splitInnerWord;
            }

        }
        // eureka!
        return newWord;
    });

    return newList.join(" ");
}

// simple tests
abbreviate("internationalization"); // "i18n"
abbreviate("accessibility"); // "a11y"
abbreviate("Accessibility"); // "A11y"
abbreviate("elephant-ride"); // "e6t-r2e"
abbreviate("elephant-rides are really fun!"); // "e6t-r3s are r4y fun!"

// hard tests
abbreviate("You need, need not want, to complete this code-wars mission");


