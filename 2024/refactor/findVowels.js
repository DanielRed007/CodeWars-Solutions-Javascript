
function vowelIndices(word = ""){
    const vowels = ["a","e","i","o","u","y"];
    const idxs = [];

    for(let i = 0; i < word.length; i++){
        const letter = word[i].toLowerCase();

        if(vowels.some(v => v === letter)){
            idxs.push(i + 1);
        }
    }

    return idxs;
}

// vowelIndices("mmm") //, []);
// vowelIndices("apple") //, [1,5]);
// vowelIndices("super") //, [2,4]);
// vowelIndices("orange") //, [1,3,6]);
// vowelIndices("supercalifragilisticexpialidocious") //, [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);

// [ 1, 2, 5, 7, 8, 22 ]
vowelIndices("OOspEWuuhYkYVgBztCvxhINPYfjhF"); // [ 1, 2, 5, 7, 8, 10, 12, 22, 25 ]