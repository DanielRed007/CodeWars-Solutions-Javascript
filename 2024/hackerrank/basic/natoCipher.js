
const NATO = {
    a: 'Alfa',
    n: 'November',
    b: 'Bravo',
    o: 'Oscar',
    c: 'Charlie',
    p: 'Papa',
    d: 'Delta',
    q: 'Quebec',
    e: 'Echo',
    r: 'Romeo',
    f: 'Foxtrot',
    s: 'Sierra',
    g: 'Golf',
    t: 'Tango',
    h: 'Hotel',
    u: 'Uniform',
    i: 'India',
    v: 'Victor',
    j: 'Juliett',
    w: 'Whiskey',
    k: 'Kilo',
    x: 'Xray',
    l: 'Lima',
    y: 'Yankee',
    m: 'Mike',
    z: 'Zulu'
};

function to_nato(words = "") {
    const formatWords = words.toLowerCase();

    let cipher = "";
    const specialChars = [",",".","!","?"];

    for(let x = 0; x < formatWords.length; x++){
        const char = formatWords[x];

        if(Object.keys(NATO).some(nato => char === nato)){
            cipher += NATO[char] + " ";
        }

        if(specialChars.some(spec => char === spec)){
            cipher += char + " ";
        }
    }

    return cipher.trim();
}

to_nato('If you can read'); // "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"
to_nato('If, you can read?'); // "India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?"
