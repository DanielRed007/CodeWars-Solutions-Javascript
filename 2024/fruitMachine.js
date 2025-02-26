
function fruit(reels, spins){
    const points = {
        Wild: 10,
        Star: 9,
        Bell: 8,
        Shell: 7,
        Seven: 6,
        Cherry: 5,
        Bar: 4,
        King: 3,
        Queen: 2,
        Jack: 1
    };

    let round = [];
    
    for(let i = 0; i < spins.length; i++){
        const spin = spins[i];
        const reel = reels[i];
        const currentReel = reel[spin];

        round.push(currentReel);
    }

    let countResults = {};

    for(let c = 0; c < round.length; c++){
        let spin = round[c];
        if(countResults[spin] >= 1){
            countResults[spin]++;
        } else {
            countResults[spin] = 1;
        };
    }

    const listResults = Object.entries(countResults).sort((a, b) => b[1] - a[1]);

    if(listResults.length === 3) return 0;

    if(listResults[0][1] === 3) {        
        return points[listResults[0][0]] * 10;
    }

    if(listResults.length === 2 && listResults[0][1] === 2 && listResults[1][0] !== "Wild") {
        return points[listResults[0][0]];
    }

    if(listResults.length === 2 && listResults[0][1] === 2 && listResults[1][0] === "Wild") {        
        return points[listResults[0][0]] * 2;
    }

}

let reel1 = null;
let reel2 = null;
let reel3 = null;
let spin = null;

let reel = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
spin = [0,0,0];

fruit([reel,reel,reel],spin); // 100

reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel2 = ["Bar", "Wild", "Queen", "Bell", "King", "Seven", "Cherry", "Jack", "Star", "Shell"];
reel3 = ["Bell", "King", "Wild", "Bar", "Seven", "Jack", "Shell", "Cherry", "Queen", "Star"];
spin = [5,4,3];

fruit([reel1,reel2,reel3],spin); // 0

reel1 = ["King", "Cherry", "Bar", "Jack", "Seven", "Queen", "Star", "Shell", "Bell", "Wild"];
reel2 = ["Bell", "Seven", "Jack", "Queen", "Bar", "Star", "Shell", "Wild", "Cherry", "King"];
reel3 = ["Wild", "King", "Queen", "Seven", "Star", "Bar", "Shell", "Cherry", "Jack", "Bell"];
spin = [0,0,1];

fruit([reel1,reel2,reel3],spin); // 3