const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
const vowels = ['a','e','i','o','u'];

function replaceVowel(char){
    const letterIndex = alphabet.findIndex(lt => lt === char);

    for(let x = alphabet.length; x >= 0; x--){
        const letter =  alphabet[x];
        
        if(x <= letterIndex || letterIndex === 0){
            if(consonants.some(cons => cons === letter)){
                return letter;
            }
        }
    }
}

function replaceConsonant(char){
    const letterIndex = alphabet.findIndex(lt => lt === char);

    for(let x = 0; x <= alphabet.length; x++){
        const letter =  alphabet[x];
        
        if(x >= letterIndex || letterIndex >= 21){
            if(vowels.some(vow => vow === letter)){
                return letter;
            }
        }
    }
}

function replaceLetters(word = "") {

    const wordList = word.split("");

    for(let x = 0; x < wordList.length; x++){
        const letter = wordList[x];

        if(vowels.some(vowel => vowel === letter)){
            wordList[x] = replaceVowel(letter);
        } else {
            wordList[x] = replaceConsonant(letter);
        }
    }

    return wordList.join("");
}

// replaceLetters('cat'); // 'ezu'
// replaceLetters('co'); // 'en'
replaceLetters('codewars'); // 'enedazuu'