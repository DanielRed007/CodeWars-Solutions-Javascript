class Student {
    constructor(name, fives, tens, twenties) {
      this.name = name;
      this.fives = fives;
      this.tens = tens;
      this.twenties = twenties;
    }
}

function mostMoney(students = []) {
    if(students.length === 1){
        return students[0].name
    }

    const studentsMoney = [];

    for(let s = 0; s < students.length; s++){
        const student = students[s];
        const fives = student.fives * 5;
        const tens = student.tens * 10;
        const twenties = student.twenties * 20;

        studentsMoney.push(fives + tens + twenties);
    }

    const maxMoney = Math.max(...studentsMoney);

    if(studentsMoney.every(m => m === maxMoney)) return "all";

    const mostMoney = studentsMoney.findIndex(st => st === maxMoney); 

    return students[mostMoney].name;
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);
    
    // "What happens if one student has the most money?"
mostMoney([andy, stephen, eric, david, phil]) //, "Eric")
mostMoney([cam, geoff, andy, stephen, eric, david, phil]) //, "Eric")
    
    // "What happens if there is only one student?"
mostMoney([andy]) //, "Andy")
mostMoney([stephen]) //, "Stephen")
    
    // "What happens if all students have the same amount of money?"
mostMoney([cam, geoff]) //, "all")
mostMoney([david, cam, geoff]) // , "all")