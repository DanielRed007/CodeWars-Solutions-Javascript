

function sortme(words){

    return words.sort((wordA,wordB) => {
        
        if(wordA[0].toLowerCase() === wordB[0].toLowerCase()){
            return wordA < wordB;
        }

        if(wordA.toLowerCase() === wordB.toLowerCase()){
            return -1;
        }

        return wordA.localeCompare(wordB);
    }).sort((a,b) => {
        if(a.toLowerCase() === b.toLowerCase()){
            return b - a;
        }

        if(a[0].toLowerCase() === b[0].toLowerCase()){
            return a.localeCompare(b);
        }
    });
}


sortme(["Hello","there","I'm","fine"]); // ["fine", "Hello", "I'm", "there"]
sortme(["C", "d", "a", "B"]); // ["a", "B", "C", "d"]
sortme(["tell","think","Work","other","want","A","Old"]); // ["A","Old","other","tell","think","want","Work"]
sortme([
    'Seem',  'call',
    'case',  'look',
    'You',   'small',
    'Her',   'year',
    'call',  'hand',
    'See',   'different',
    'think', 'This',
    'be',    'Be',
    'early'
]); // [ 'be', 'Be', 'call', 'call', …(13) ]