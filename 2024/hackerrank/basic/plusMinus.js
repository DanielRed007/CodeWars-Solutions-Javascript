function plusMinus(arr) {
    const data = {
        positive: 0,
        zero: 0,
        negative: 0
    };

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        if (val > 0) {
            data.positive++;
        }

        if (val === 0) {
            data.zero++;
        }

        if (val < 0) {
            data.negative++;
        }
    }

    const result = Object.values(data).map(val => {
        return  parseFloat(val / arr.length).toPrecision(6);
    });

    console.log(result[0]);
    console.log(result[2]);
    console.log(result[1]);
}

console.log(plusMinus([1,1,0,-1,-1]));
console.log(plusMinus([-4,3,-9,0,4,1]));