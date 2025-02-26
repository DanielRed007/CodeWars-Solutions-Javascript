
// solved using selection sort

function sortCsvColumns(csvFileContent = "") {
    const orderRow = csvFileContent.split("\n")
                        .map(row => row.split(";").sort((a,b) => a.localeCompare(b)))[0];
    const csv = csvFileContent.split("\n").map(row => row.split(";"));

    for(let c = 0; c < orderRow.length; c++){
        const orderIndex = csv[0].indexOf(orderRow[c]);
        
        for(let s = 0; s < csv.length; s++){
            let temp = csv[s][c];
            csv[s][c] = csv[s][orderIndex];
            csv[s][orderIndex] = temp;
        }
    }

    return csv.map(val => val.join(";")).join("\n")
}

const file1 = "myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n"
                   + "17945;10091;10088;3907;10132\n"
                   + "2;12;13;48;11";

console.log(sortCsvColumns(file1))
// "Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n"
// + "3907;17945;10091;10088;10132\n"
// + "48;2;12;13;11";

const file2 = "IronMan;Thor;Captain America;Hulk\n"
+ "arrogant;divine;honorably;angry\n"
+ "armor;hammer;shield;greenhorn\n"
+ "Tony;Thor;Steven;Bruce";

// console.log(sortCsvColumns(file2));
// postSorting = "Captain America;Hulk;IronMan;Thor\n"
//                 + "honorably;angry;arrogant;divine\n"
//                 + "shield;greenhorn;armor;hammer\n"
//                 + "Steven;Bruce;Tony;Thor";