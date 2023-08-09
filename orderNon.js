
function firstNonRepeatingLetter(chars) {

    const countDups = (text) => {
        let counter = {};
    
        for(let i = 0; i < text.length; i++){
            const char = text[i];
            if(counter[char] > 0){
                counter[char]++
            } else {
                counter[char] = 1;
            }
        }
    
        return counter;
    }
    
    if(!chars) return "";

    const results = Object.entries(countDups(chars.toLowerCase()));

    const firstNon = results.filter((char) => char[1] === 1);

    if(!firstNon || firstNon.length === 0) return "";

    const resultChar = firstNon[0][0];

    const charList = chars.split("");

    const existsInChars = charList.some(val => val === resultChar);

    if(existsInChars){
        return resultChar;
    } else {
        return resultChar.toUpperCase();
    }
}



firstNonRepeatingLetter('a') // 'a'
firstNonRepeatingLetter('stress') // 't'
firstNonRepeatingLetter('moonmen') // 'e'
firstNonRepeatingLetter('abba') // ''
firstNonRepeatingLetter('sTreSS') // 'T'
