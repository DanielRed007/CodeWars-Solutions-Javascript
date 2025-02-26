
function designerPdfViewer(letterValues = [], word = "") {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const wordValues = [];

    for(let i = 0; i < word.length; i++){
        const letter = word[i].toUpperCase();
        const letterIndex = alphabet.indexOf(letter);

        wordValues.push(letterValues[letterIndex]);
    }

    return Math.max(...wordValues) * wordValues.length;
}

designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], "abc");