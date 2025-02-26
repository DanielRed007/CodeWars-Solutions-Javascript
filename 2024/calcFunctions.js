function calculator(callback,innerValue){
    const operator = callback()[0];
    const value = callback()[1];

    switch(operator){
        case "plus":
            return innerValue + value;
        case "minus":
            return innerValue - value;
        case "times":
            return innerValue * value;
        case "dividedBy":
            return Math.floor(innerValue / value);
    }
}

function zero(cb) {
    if(!cb){
        return 0;
    } else {
        const calculation =  calculator(cb,0);
        return calculation;
    }
}
function one(cb) {
    if(!cb){
        return 1;
    } else {
        const calculation =  calculator(cb,1);
        return calculation;
    }
}
function two(cb) {
    if(!cb){
        return 2;
    } else {
        const calculation =  calculator(cb,2);
        return calculation;
    }
}
function three(cb) {
    if(!cb){
        return 3;
    } else {
        const calculation =  calculator(cb,3);
        return calculation;
    }
}
function four(cb) {
    if(!cb){
        return 4;
    } else {
        const calculation =  calculator(cb,4);
        return calculation;
    }
}
function five(cb) {
    if(!cb){
        return 5;
    } else {
        const calculation =  calculator(cb,5);
        return calculation;
    }
}
function six(cb) {
    if(!cb){
        return 6;
    } else {
        const calculation =  calculator(cb,6);
        return calculation;
    }
}
function seven(cb) {
    if(!cb){
        return 7;
    } else {
        const calculation =  calculator(cb,7);
        return calculation;
    }
}
function eight(cb) {
    if(!cb){
        return 8;
    } else {
        const calculation =  calculator(cb,8);
        return calculation;
    }
}
function nine(cb) {
    if(!cb){
        return 9;
    } else {
        const calculation =  calculator(cb,9);
        console.log(calculation);
        return calculation;
    }
}

function plus(num) {
    return function (){
        return ["plus", num];
    };
}
function minus(num) {
    return function (){
        return ["minus", num];
    };
}
function times(num) {
    return function (){
        return ["times", num];
    };
}
function dividedBy(num) {
    return function (){
        return ["dividedBy", num];
    };
}

six(plus(six()));