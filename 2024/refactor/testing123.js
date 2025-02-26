// version 1

const number1 = function(list = []){
    let result = [];

    for(let i = 1; i <= list.length; i++){
        const current = list[i - 1];
        let temp = i + ": " + current;
        result.push(temp);
    }

    return result;
}

// version 2 

const number2 = function(list = []){
    return list.map((value,index) => {
        return (index + 1) + ": " + value; 
    });
}

// version 3 

const number = (list = []) => list.map((value,index) => (index + 1) + ": " + value);

number(["a", "b", "c"]); // ["1: a", "2: b", "3: c"]