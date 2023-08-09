
function solution(number){

    return number > 0 && number ? Array(number).fill(null)
        .map((val, index) => index)
        .filter(val => (val % 3 === 0 || val % 5 === 0))
        .reduce((curr,acc) => curr + acc) : 0
}

solution(10);