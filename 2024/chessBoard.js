
function chessBoard(rows, columns) {
    let board = [];

    for(let x = 0; x < rows; x++){
        let col = [];
        for(let y = 0; y < columns; y++){
            if(x % 2 === 0){

                if(y % 2 === 0){
                    col.push("O")
                } else {
                    col.push("X")
                }
            }

            if(x % 2){
                if(y % 2){
                    col.push("O")
                } else {
                    col.push("X")
                }
            }
        }
        
        board.push(col);
    }

    return board;
}

chessBoard(3,7);
/* 

[
    ["O","X","O","X","O","X","O"],
    ["X","O","X","O","X","O","X"],
    ["O","X","O","X","O","X","O"]
]

*/