// const getNextRounded = (num) => {
//     return 5 * Math.round((num + 4) / 5)
// }

// function gradingStudents(grades = []) {
//     return grades.map((grade) => {
//         if(grade < 38) return grade;

//         const rounded = getNextRounded(grade)

//         return rounded - grade < 3 ? rounded: grade;
//     });
// }


const getNextRounded = (num) => {
    return 5 * Math.round((num + 4) / 5)
}

function gradingStudents(grades = []) {
    console.log(grades.slice(1))
    const g = grades.slice(1)
    return g.map((grade) => {
        if(grade < 38) return grade;

        const rounded = getNextRounded(grade)
        console.log(rounded - grade)
        return rounded - grade < 3 ? rounded: grade;
    });
}

console.table(gradingStudents([4,73,67,38,33]))