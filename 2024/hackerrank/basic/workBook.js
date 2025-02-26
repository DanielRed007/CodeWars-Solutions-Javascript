
function workbook(chapters = 0, maxPerPage = 0, exerciseList = []){
    let special = 0;
    let page = 1;

    for(let x = 0; x <= exerciseList.length; x++){
        const exPerPage = exerciseList[x];

        for(let y = 1; y <= exPerPage; y++){
            if(y === page) special++;

            if(Number.isInteger(y / maxPerPage) || y === exPerPage){
                page++;
            }
        }
    }

    return special;
}

console.log(workbook(5,3,[4, 2, 6, 1, 10])); // 4
console.log(workbook(10,5,[3, 8, 15, 11, 14, 1, 9, 2, 24, 31])); // 8