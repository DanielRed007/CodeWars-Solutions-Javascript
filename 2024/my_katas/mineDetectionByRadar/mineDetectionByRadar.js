
// Version 1
function mineDetectionByRadar(detectorData = []){
    let result = [];

    const anomalies = {
        "0": 1,
        "(": 2,
        "X": 3,
        "#": 4,
        "*": 5
    };

    for(let x = 0; x < detectorData.length; x++){
        const zone = detectorData[x];
        const check = {};
        check.pos = x;
        check.mine = false

        if((zone[0] + anomalies[zone[1]]) >= 7){
            check.mine = true;
            result.push(x);
        }
    }

    return result;
}

mineDetectionByRadar([[2,"X"],[4,"X"],[5,"("],[2,"*"],[1,"*"]]);
mineDetectionByRadar([[5,"X"],[1,"*"],[2,"("],[3,"#"],[5,"*"],[3,"0"],[5,"#"]]);
mineDetectionByRadar([[4, "X"], [5, "#"], [1, "0"], [2, "X"], [3, "0"], [4, "*"], [5, "#"], [1, "("], [2, "X"], [3, "#"], [4, "*"], [5, "("], [1, "0"], [2, "X"], [3, "#"], [4, "*"], [5, "X"]]);
mineDetectionByRadar([[2, "X"], [3, "#"], [4, "0"], [2, "#"], [5, "("], [3, "0"], [1, "*"]]);
mineDetectionByRadar([[5, "#"], [1, "X"], [2, "0"], [3, "("], [4, "#"], [5, "X"], [1, "*"], [2, "0"], [3, "("], [4, "X"], [5, "#"]]);
mineDetectionByRadar([[4, "#"], [5, "X"], [1, "0"], [2, "X"], [3, "0"], [4, "*"], [5, "#"]]);
mineDetectionByRadar([[3, "#"], [4, "X"], [5, "#"], [1, "0"], [2, "X"], [3, "0"], [4, "*"], [5, "#"], [1, "("], [2, "X"], [3, "#"], [4, "*"], [5, "("], [1, "0"], [2, "X"], [3, "#"]]);    

module.exports = {
    mineDetectionByRadar
}