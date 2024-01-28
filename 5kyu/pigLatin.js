// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(text = "") {
  return text
    .split(" ")
    .map((word) => {
      const isLetters = /^[a-zA-Z]+$/.test(word);

      if (isLetters) {
        return word.substring(1, word.length) + word[0] + "ay";
      }

      return word;
    })
    .join(" ");
}

pigIt("Pig latin is cool"); // igPay atinlay siay oolcay
pigIt("Hello world !"); // elloHay orldway !
