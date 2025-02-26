
function reverseVowels(text) {
    let textList = text.split("");
    let vowels = [];
    let vowelList = ["a","e","i","o","u"];

    for(let i = 0 ; i < text.length; i++){
        if(vowelList.some(vowel => textList[i].toLowerCase() === vowel)){
            let temp = textList[i];
            vowels.push(temp);
            let signal = "*"
            textList[i] = signal;
        }

    }

    let reversed = vowels.reverse();

    for(let x = 0 ; x < textList.length; x++){
        if(textList[x] === "*"){
            let temp = reversed[0];
            textList[x] = temp;
            reversed = reversed.slice(1,reversed.length);
        }
    }

    return textList.join("");
}

reverseVowels("Hello!"); // "Holle!"
reverseVowels("Tomatoes"); // "Temotaos"
reverseVowels("Reverse Vowels In A String"); // "RivArsI Vewols en e Streng"