function validateHello(greetings) {
    const langs = ["hello","ciao","salut","hallo","hola","ahoj","czesc"];
    
    const wordList = greetings.split(" ");

    for(let i = 0; i < wordList.length; i++){
        if(langs.some(lang => wordList[i].toLowerCase().includes(lang))){
            return true;
        }
    }

    return false;
}

validateHello("bIEN HoMBrE; paSa, tsChUSs; DoIng wie, bieN TsCHUSS yOu; TrES. QUE! tReS: WIe qUe YOu HOw ciAO; doING? TsChuSS. QuE vistA SaluT wiE; biEN homBRe WiE: pasa: how: wIE hELlo:");
validateHello("meh");
validateHello("ahoj");