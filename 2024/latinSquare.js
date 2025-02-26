
function makeLatinSquare(n) {
    let counter = n;
    const latinRow = [];

    while(counter >= 1){
        const value = Math.floor(Math.random() * counter);
        latinRow.push(value);
        counter--;
    }
    
    console.log(latinRow);

    return [[]];
}

makeLatinSquare(4);