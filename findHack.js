
function findHack(scores) {
    let hackers = [];

    for(let x = 0; x < scores.length; x++){
        const student = scores[x];
        const score = student[1];
        const grades = student[2];
        
        let finalScore = 0;

        if(grades.length >= 5 && grades.every(grade => grade === "A" || grade === "B")){
            finalScore += 20;
        }

        grades.forEach((grade,idx) => {
            if(grade === "A") finalScore += 30;
            if(grade === "B") finalScore += 20;
            if(grade === "C") finalScore += 10;
            if(grade === "D") finalScore += 5;
        });

        if(finalScore !== score && finalScore < 200){
            hackers.push(student[0]);
        }
    }    

    return hackers;
}

let list1 = [
    ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
    ["name2", 120, ["B", "A", "A", "A"]],
    ["name3", 160, ["B", "A", "A", "A","A"]],
    ["name4", 140, ["B", "A", "A", "C", "A"]]
];

findHack(list1); //  ["name2","name4"]

let list2 = [
    ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
    ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
    ["name3", 200, ["B", "A", "A", "C"]], // name3 point is 200 but real point is 90 => hacked
    ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
];

findHack(list2); //  ["name1", "name3"]