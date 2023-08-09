
// Version 1 - Improved Loop

function isPangram1(text){
    const formatText = text.toLowerCase();
    const alphabet = "abdcefghijklmnopqrstuvwxyz";
    let pangram = true;
    
    alphabet.split("").forEach((letter) => {
        if(!formatText.includes(letter)){
            pangram = false;
        }
    });
    
    return pangram;
}

// Version 2 - Array Every Method

function isPangram(text){
    const formatText = text.toLowerCase();
    const alphabet = "abdcefghijklmnopqrstuvwxyz";
    
    return alphabet.split("").every(letter => formatText.includes(letter));
}

isPangram("The quick brown fox jumps over the lazy dog.");
isPangram("This is not a pangram.");