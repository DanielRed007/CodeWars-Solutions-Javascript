
// Version 1

function flickSwitch1(list = []){
    let result = [];
    let flick = true;

    for(let x = 0; x < list.length; x++){
        const item = list[x];
        if(item === 'flick'){
            flick = !flick;
        }

        result.push(flick);
    }

    return result;
}

// Version 2

function flickSwitch2(list = []){
    let flick = true;

    const flickSet = list.map((item) => {
        if(item === 'flick') flick = !flick;

        return flick;
    });

    return flickSet;
}

// Version 3

function flickSwitch(list = []){
    let flick = true;

    return list.map((item) => {
        if(item === 'flick') flick = !flick;

        return flick;
    });
}

flickSwitch(["codewars", "flick", "code", "wars"]); // [true, false, false, false]);
flickSwitch(["flick", "chocolate", "adventure", "sunshine"]); // [false, false, false, false]);
flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]); // [true, true, false, false, true]);
flickSwitch(["flick", "flick", "flick", "flick", "flick"]); // [false, true, false, true, false]);
flickSwitch(["bicycle"]); // [true]);
flickSwitch(["flick"]); // [false]);
flickSwitch([]); // []);