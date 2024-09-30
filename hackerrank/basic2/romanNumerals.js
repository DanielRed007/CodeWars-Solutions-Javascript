
function solution(roman = '') {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;

    for(let num = 0; num < roman.length; num++){
        const current = romanNumerals[roman[num]];
        const previous = romanNumerals[roman[num] - 1]
        console.log(current, previous);

        if(romanNumerals[roman[num]]){
            console.log(roman[num])
            total += romanNumerals[roman[num]]
        }
    }

    console.log(total);
    return total;
}

// solution('XXI'); // 21
// solution('I'); // 1
// solution('IV'); // 4
solution('MMVIII'); // 2008
// solution('MDCLXVI'); // 1666