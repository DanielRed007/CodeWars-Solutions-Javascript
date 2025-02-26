
function checkeredBoard(dimension) {
    let board = [];

    for(let i = 0; i < dimension; i++){
        let row = [];

        for(let j = 0; j < dimension; j++){
            if(dimension % 2){
                if(i % 2){
                    if(j % 2) row.push("\u25A0");
                    if(j % 2 === 0) row.push("\u25A1");
                }

                if(i % 2 === 0){
                    if(j % 2) row.push("\u25A1");
                    if(j % 2 === 0) row.push("\u25A0");
                }
            }

            if(dimension % 2 === 0){
                if(i % 2){
                    if(j % 2) row.push("\u25A1");
                    if(j % 2 === 0) row.push("\u25A0");
                }

                if(i % 2 === 0){
                    if(j % 2) row.push("\u25A0");
                    if(j % 2 === 0) row.push("\u25A1");
                }
            }
        }
        const formattedRow = row.join(" ");

        board.push(formattedRow);
    }

    const result = board.join("\n").trim();

    return result;
}

checkeredBoard(5);
checkeredBoard(6);
