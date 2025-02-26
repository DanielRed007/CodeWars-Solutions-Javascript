function dirFilter(dirs){
    const dirRedux = dirs.slice();

    for(let i = 0; i < dirRedux.length; i++){
        
        if(dirRedux[i] === "NORTH" && dirRedux[i + 1] && dirRedux[i + 1] === "SOUTH"){
            dirRedux[i] = "";
            dirRedux[i + 1] = "";
        }

        if(dirRedux[i] === "SOUTH" && dirRedux[i + 1] && dirRedux[i + 1] === "NORTH"){
            dirRedux[i] = "";
            dirRedux[i + 1] = "";
        }

        if(dirRedux[i] === "WEST" && dirRedux[i + 1] && dirRedux[i + 1] === "EAST"){
            dirRedux[i] = "";
            dirRedux[i + 1] = "";
        }

        if(dirRedux[i] === "EAST" && dirRedux[i + 1] && dirRedux[i + 1] === "WEST"){
            dirRedux[i] = "";
            dirRedux[i + 1] = "";
        }
    }

    const resultDirs = dirRedux.filter(val => val);
    return resultDirs;
}

function dirReduc(list){
    const filter1 = dirFilter(list);
    const result = dirFilter(filter1);

    return result;
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]); // WEST
dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]); // []