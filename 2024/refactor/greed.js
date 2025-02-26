/* 

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

*/

function score(dice = []) {
    let data = {};

    for(let i = 0; i < dice.length; i++){
        const value = dice[i];

        if(data[value] >= 1){
            data[value]++;
        } else {
            data[value] = 1;
        }
    }

    let triples = null;
    let results = Object.entries(data)
    let finalScore = 0;
    
    results = results.map(set => {
        if(set[1] >= 3){
            triples = set;
            set[1] = set[1] - 3;
        }

        return set;
    }).filter(val => val[0] === "5" || val[0] === "1");

    if(triples){
        if(triples[0] === "1"){
            finalScore += (parseInt(triples[0]) * 1000)
        } else {
            finalScore += (parseInt(triples[0]) * 100)
        }
    }

    results.forEach(val => {
        if(val[0] === "5"){
            finalScore += (val[1] * 50)
        }

        if(val[0] === "1"){
            finalScore += (val[1] * 100)
        }
    });

    return finalScore;
}

// score([2, 3, 4, 6, 2]); // 0
// score([4, 4, 4, 3, 3]); // 400
score([2,4,4,5,4]); // 450

score([1,1,1,1,3]); // 1100