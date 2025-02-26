
function kebabize(text) {
    let kebabText = "";
    
    for(let i = 0; i < text.length; i++){
        const char = text[i];
        
        if(!isNaN(parseInt(char))){
            kebabText += "";
        } else if(char === char.toUpperCase() && i === 0){
            kebabText += char.toLowerCase();
        }else if(char === char.toUpperCase()){
            kebabText += "-" + char.toLowerCase();
        } else if (char === char.toLowerCase()) {
            kebabText += char;
        }
    }

    if(kebabText[0] === "-"){
        return kebabText.replace("-","")
    } else {
        return kebabText;
    }
}

kebabize('myCamelCasedString');
kebabize('myCamelHas3Humps');
kebabize('RceMf');
kebabize('5Urm6'); // 'urm'