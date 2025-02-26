
function generateShape(integer){
    let result = "";
    
    for(let i = 0; i < integer; i++){
        let char = "+".repeat(integer) + "\n";
        result += char;
    }

    return result.trim();
}

generateShape(3);