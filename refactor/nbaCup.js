function nbaCup(resultSheet = "", toFind) {
    let win = 0, draw = 0, loss = 0, score = 0, conceed = 0, points = 0;
    const matchesData = resultSheet.split(",");
    const matchList = [];

    for(let x = 0; x < matchesData.length; x++){
        const match = matchesData[x].split(" ");

        const numIndex = match.findIndex(word => !isNaN(word));
        const team1 = match.slice(0,numIndex + 1);
        const team2 = match.slice(numIndex + 1);

        matchList.push([
            [team1.slice(0,team1.length - 1).join(" "),parseFloat(team1.slice(team1.length - 1, team1.length))],
            [team2.slice(0,team2.length - 1).join(" "),parseFloat(team2.slice(team2.length - 1, team2.length))]
        ]);
    }

    const teamData = matchList.filter(match => match.some(m => m[0] === toFind))
        .map((m => {
            const sortedMatch = m.sort((teamA,teamB) => {
                if(teamB[0] === toFind){
                    return 1;
                }
                return -1;
            });

            return sortedMatch;
        }));
    
    if(toFind === "") return "";

    if(teamData.length === 0){
        return toFind + ":This team didn't play!";
    }

    for(let i = 0; i < teamData.length; i++){
        const teams = teamData[i];
        const teamAresult = teams[0][1];
        const teamBresult = teams[1][1];

        score += teamAresult;
        conceed += teamBresult;

        if(teamAresult > teamBresult){
            win++;
            points += 3;
        }

        if(teamAresult === teamBresult){
            draw++;
            points += 1;
        }

        if(teamAresult < teamBresult){
            loss++;
        }
    }

    if(!Number.isInteger(score) || !Number.isInteger(conceed)){
        return `Error(float number):${teamData[0][1][0]} ${conceed} ${teamData[0][0][0]} ${score}`;
    }

    return `${toFind}:W=${win};D=${draw};L=${loss};Scored=${score};Conceded=${conceed};Points=${points}`;
}

const r1 = "Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112,"
    + "Los Angeles Lakers 111 Minnesota Timberwolves 112,Phoenix Suns 95 Dallas Mavericks 111,Portland Trail Blazers 112 New Orleans Pelicans 94,"
    + "Sacramento Kings 104 Los Angeles Clippers 111,Houston Rockets 85 Denver Nuggets 105,Memphis Grizzlies 76 Cleveland Cavaliers 106,"
    + "Milwaukee Bucks 97 New York Knicks 122,Oklahoma City Thunder 112 San Antonio Spurs 106,Boston Celtics 112 Philadelphia 76ers 95,"
    + "Brooklyn Nets 100 Chicago Bulls 115,Detroit Pistons 92 Utah Jazz 87,Miami Heat 104 Charlotte Hornets 94,"
    + "Toronto Raptors 106 Indiana Pacers 99,Orlando Magic 87 Washington Wizards 88,Golden State Warriors 111 New Orleans Pelicans 95,"
    + "Atlanta Hawks 94 Detroit Pistons 106,Chicago Bulls 97 Cleveland Cavaliers 95,";
const r2 = "San Antonio Spurs 111 Houston Rockets 86,Chicago Bulls 103 Dallas Mavericks 102,Minnesota Timberwolves 112 Milwaukee Bucks 108,"  
    + "New Orleans Pelicans 93 Miami Heat 90,Boston Celtics 81 Philadelphia 76ers 65,Detroit Pistons 115 Atlanta Hawks 87,"  
    + "Toronto Raptors 92 Washington Wizards 82,Orlando Magic 86 Memphis Grizzlies 76,Los Angeles Clippers 115 Portland Trail Blazers 109,"  
    + "Los Angeles Lakers 97 Golden State Warriors 136,Utah Jazz 98 Denver Nuggets 78,Boston Celtics 99 New York Knicks 85,"  
    + "Indiana Pacers 98 Charlotte Hornets 86,Dallas Mavericks 87 Phoenix Suns 99,Atlanta Hawks 81 Memphis Grizzlies 82,"  
    + "Miami Heat 110 Washington Wizards 105,Detroit Pistons 94 Charlotte Hornets 99,Orlando Magic 110 New Orleans Pelicans 107,"  
    + "Los Angeles Clippers 130 Golden State Warriors 95,Utah Jazz 102 Oklahoma City Thunder 113,San Antonio Spurs 84 Phoenix Suns 104,"  
    + "Chicago Bulls 103 Indiana Pacers 94,Milwaukee Bucks 106 Minnesota Timberwolves 88,Los Angeles Lakers 104 Portland Trail Blazers 102,"  
    + "Houston Rockets 120 New Orleans Pelicans 100,Boston Celtics 111 Brooklyn Nets 105,Charlotte Hornets 94 Chicago Bulls 86,Cleveland Cavaliers 103 Dallas Mavericks 97";

const teams = "Los Angeles Clippers,Dallas Mavericks,New York Knicks,NYK,Atlanta Hawks,Indiana Pacers,Memphis Grizzlies,"
    + "Los Angeles Lakers,Minnesota Timberwolves,Phoenix Suns,Portland Trail Blazers,New Orleans Pelicans,"
    + "Sacramento Kings,Los Angeles Clippers,Houston Rockets,Denver Nuggets,Cleveland Cavaliers,Milwaukee Bucks,"
    + "Oklahoma City Thunder, San Antonio Spurs,Boston Celtics,Philadelphia 76ers,Brooklyn Nets,Chicago Bulls,"
    + "Detroit Pistons,Utah Jazz,Miami Heat,Charlotte Hornets,Toronto Raptors,Orlando Magic,Washington Wizards,"
    + "Golden State Warriors,Dallas Maver";
const r = r1 + r2;

nbaCup(r, "Boston Celtics"); // "Boston Celtics:W=4;D=0;L=0;Scored=403;Conceded=350;Points=12"
nbaCup(r, "Boston Celt"); // "Boston Celt:This team didn't play!"
