
function firstDup(word = "") {
    let map = {};

    for(let i = 0; i < word.length; i++){
        const char = word[i];

        if(map[char] >= 1){
            map[char]++
        } else {
            map[char] = 1
        }
    }

    const dups = Object.entries(map).filter(val => val[1] > 1).map(v => v[0]);
    const sequence = [];
    
    for(let x = 0; x < dups.length; x++){
        const first = word.indexOf(dups[x]);
        sequence.push(first);
    }

    const min = Math.min(...sequence);

    return word[min]
}

firstDup('tweet'); // 't');
firstDup('Ode to Joy'); // ' ');
firstDup('ode to joy'); // 'o');
firstDup('bar'); // undefined);
firstDup('123123'); // '1');
firstDup('!@#$!@#$'); // '!')