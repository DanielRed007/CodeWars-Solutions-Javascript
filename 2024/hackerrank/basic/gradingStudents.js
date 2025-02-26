
function gradingStudents(grades = []) {
    
    for(let x = 0; x < grades.length; x++){
        let roundedGrade = grades[x];

        if(grades[x] >= 38){

            while(!(roundedGrade % 5 === 0)){
                roundedGrade++;
            }

            const diff = roundedGrade - grades[x];

            if(diff < 3){
                grades[x] = roundedGrade;
            }
            
        }
    }

    return grades;
}

console.log(gradingStudents([ 73, 67, 38, 33])); // [75, 67, 40, 33]