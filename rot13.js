
function rot13(message){

    let rot13 = "";
    const charList = message.split("");
    const rot1 = "nopqrstuvwxyz".split("");
    const rot2 = "abcdefghijklm".split("");

    charList.forEach((char,i) => {

        let isLetter = /^[a-zA-Z]+$/.test(char);

        if(rot1.includes(char)){
            rot13 += rot2[rot1.indexOf(char)];
            return
        }

        if(rot2.includes(char)){
            rot13 += rot1[rot2.indexOf(char)]
            return
        }

        if(rot1.includes(char.toLowerCase())){
            rot13 += rot2[rot1.indexOf(char.toLowerCase())].toUpperCase();
            return
        }

        if(rot2.includes(char.toLowerCase())){
            rot13 += rot1[rot2.indexOf(char.toLowerCase())].toUpperCase();
            return
        }

        if(!isLetter){
            rot13 += char;
            return
        }
    });

    return rot13;
}

rot13("Test"); // Grfg
rot13("Codewars"); // 
rot13("Ruby is cool!");
// rot13("abcdefghijklmnopqrstuvwxyz");
// rot13("hola"); // ubyn