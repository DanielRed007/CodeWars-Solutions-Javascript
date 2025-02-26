
function spacey(list){
    let result = [];
    let space = "";

    for(let x = 0; x < list.length; x++){
        space += list[x]
        result.push(space);
    }

    return result;
}

spacey(['kevin', 'has','no','space']); // [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
