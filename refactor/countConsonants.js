
function consonantCount(text = ""){
    const consonants = [
        'b', 'c', 'd', 'f', 'g',
        'h', 'j', 'k', 'l', 'm',
        'n', 'p', 'q', 'r', 's',
        't', 'v', 'w', 'x', 'y',
        'z'
    ];

    return text.split("").filter(char => consonants.some(con => char.toLowerCase() ===  con)).length;
}

consonantCount("aeiouZZZ");
consonantCount(" ^&$#");