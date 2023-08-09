// function lineupStudents(students = ""){

//     const lineup = students.split(" ").sort((stA,stB) => {
//         if(stA.length === stB.length){
//             return 1;
//         }

//         if(stB.length < stA.length){
//             return -1;
//         }

//         return 0;
//     });

//     return lineup;
// }

function lineupStudents(students = ""){
    const lineup = students.split(" ").sort((a,b) => {

        if(a.length === b.length) {
            return b.length - a.length;
        }

        return a.length - b.length;
    });

    return lineup;
}

console.log(lineupStudents("Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi"));
// ['Takehiko', 'Takayuki', 'Takahiro', 'Takeshi', 'Takeshi', 'Takashi', 'Tadashi', 'Takeo', 'Takao']
console.log(lineupStudents("xxa xxb xxc xxd xa xb xc xd"));
// ['xxd', 'xxc', 'xxb', 'xxa', 'xd', 'xc', 'xb', 'xa']
console.log(lineupStudents("Takeshi Rokuro Osamu Tatsuo Yasushi Takeo Saburo Takahiro Shigeru"));
// [ 'Takahiro', 'Yasushi', 'Takeshi', 'Shigeru', 'Tatsuo', 'Saburo', 'Rokuro', 'Takeo', 'Osamu' ]