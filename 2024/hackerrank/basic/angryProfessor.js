
function angryProfessor(threshold = 0, students = []) {
    let studentCount = 0;

    for(let i = 0; i < students.length; i++){
        const studentTime = students[i];

        if(studentTime <= 0){
            studentCount++;
        }
    }

    return studentCount >= threshold ? "NO" : "YES";
}

console.log(angryProfessor(3, [-1,-3,4,2]));
console.log(angryProfessor(2, [0,-1,2,1]));