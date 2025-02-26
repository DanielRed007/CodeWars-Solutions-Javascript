
// While loop version
function pointsWhile(games) {
    let count = 0;
    let points = 0;

    while(games.length > count){

        let game = games[count].split(":").map(num => parseInt(num));

        if(game[0] > game[1]){
            points += 3;
        }

        if(game[0] === game[1]){
            points += 1;
        }

        count++;
    }

    return points;
}

// function points(games) {
//     return games.reduce((current, element) => {
//       let arraySplit = element.split(':');
//       return (arraySplit[0] > arraySplit[1]) ? current += 3 : (arraySplit[0] < arraySplit[1]) ? current : current += 1;
//     }, 0);
// }

points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]); // 30
points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]); // 10