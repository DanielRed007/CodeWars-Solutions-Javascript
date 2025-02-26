const maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];

function getMazePosition(maze){
    let position = [0,0];

    for(let i = 0; i < maze.length; i++){
        const row = maze[i];
        const first = row.find(val => val === 2);

        if(first){
            position[0] = i;
            row.forEach((val, idx) => {
                if(val === 2){
                    position[1] = idx;
                }
            });
        };
    }

    return position;
}

function mazeRunner(maze, directions) {
    console.log(maze, directions, "My Data");
    let mazeList = maze.slice();
    let initial = getMazePosition(mazeList);

    for(let idx = 0; idx < directions.length; idx++){
        const direction = directions[idx];
        if(maze[initial[0]][initial[1]] === 3){
            console.log("Finish");
            return "Finish";
        }

        if(maze[initial[0]][initial[1]] === 1){
            console.log("Dead");
            return "Dead";
        }

        if(direction === "N"){
            initial[0]--
        }

        if(direction === "S"){
            initial[0]++
        }

        if(direction === "W"){;
            initial[1]--
        }

        if(direction === "E"){
            initial[1]++
        }
    }

    if(initial[0] < 0 || initial[0] > maze.length - 1){
        console.log("Dead");
        return "Dead";
    }

    if(initial[1] < 0 || initial[1] > maze.length - 1){
        console.log("Dead");
        return "Dead";
    }

    const result = maze[initial[0]][initial[1]];
    
    if(result === 3){
        console.log("Finish");
        return "Finish";
    }

    if(result === 0){
        console.log("Lost");
        return "Lost";
    }
}

mazeRunner(maze, ["N","N","N","N","N","E","E","E","E","E"]); // Finish
mazeRunner(maze, ["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]); // Finish
mazeRunner(maze, ["N","N","N","N","N","E","E","E","E","E","W","W"]); // Finish
mazeRunner(maze, ["N","N","N","W","W"]); // Dead
mazeRunner(maze, ["N","N","N","N","N","E","E","S","S","S","S","S","S"]); // Dead
mazeRunner(maze, ["N","E","E","E","E"]); // Lost
