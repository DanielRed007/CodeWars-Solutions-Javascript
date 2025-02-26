const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

function getCaesarKey(newKey = 0, oldKey = 0) {
    let caesarKey = newKey + oldKey;

    while (caesarKey < 0) {
        caesarKey += 26; // Wrap around for negative keys
    }

    return caesarKey % 26 || 26;
}

function encryptor(key = 0, message = ""){

    const dataSet = message.split("");

    for(let x = 0; x < dataSet.length; x++){
        const char = dataSet[x];
        const alphaValue = alphabet.find(letter => letter.toUpperCase() === char || letter.toLowerCase() == char);
        
        if(alphaValue){
            const alphaKey = alphabet.indexOf(alphaValue) + 1;
            const newKey = getCaesarKey(alphaKey,key);
            const newLetter = alphabet[newKey - 1];

            if(char.toUpperCase() === char){
                dataSet[x] = newLetter.toUpperCase();
            } else {
                dataSet[x] = newLetter.toLowerCase();
            }
        }

    }

	return dataSet.join("");
}

encryptor(13,"Caesar Cipher"); // 'Pnrfne Pvcure'
encryptor(1,"Caesar Cipher"); // 'Dbftbs Djqifs'
encryptor(27, "Whoopi Goldberg"); // 'Xippqj Hpmecfsh'
encryptor(-5, "Hello World!"); // 'Czggj Rjmgy!'
encryptor(-59,"bJ0x:JBxOK&DIFmlcge[mLhz hunRFj2UM["); // 