function splitAndMerge(string, separator) {
    let textList = string.split("");

    for(let x = 0; x < textList.length - 1; x++){
        const char = textList[x];
        const next = textList[x + 1];

        if(char !== " " && next !== " ") textList[x] = char + separator;
    }

    return textList.join("");
}


splitAndMerge("My name is John"," ") // , "M y n a m e i s J o h n");
splitAndMerge("My name is John","-") // , "M-y n-a-m-e i-s J-o-h-n");
splitAndMerge("Hello World!",".") // , "H.e.l.l.o W.o.r.l.d.!");
splitAndMerge("Hello World!",",") // , "H,e,l,l,o W,o,r,l,d,!");