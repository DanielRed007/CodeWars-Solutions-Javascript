const keyPad = {
    "1": "",
    "2": "ABC",
    "3": "DEF",
    "4": "GHI",
    "5": "JKL",
    "6": "MNO",
    "7": "PQRS",
    "8": "TUV",
    "9": "WXYZ",
    "*": "*",
    "0": " ",
    "#": "#"
};

const keyPadList = {
    "1": [""],
    "2": ["A", "B", "C"],
    "3": ["D", "E", "F"],
    "4": ["G", "H", "I"],
    "5": ["J", "K", "L"],
    "6": ["M", "N", "O"],
    "7": ["P", "Q", "R", "S"],
    "8": ["T", "U", "V"],
    "9": ["W", "X", "Y", "Z"],
    "*": ["*"],
    "0": [" "],
    "#": ["#"]
};

const keyPad2D = Object.entries(keyPadList);

function presses(chars = "") {
    let counter = 0;

    for(let x = 0; x < chars.length; x++){
        let char = chars[x].toUpperCase();

        for(let key in keyPad){
            const keys = keyPad[key].split("");
            keys.push(key);
            
            const pressedChar = keys.findIndex(key => key === char);

            if(pressedChar > 0) counter += pressedChar + 1;
        }
   
    }

    console.log(counter);
    return counter;
}

presses('LOL'); // 9
presses('HOW R U'); // 13