
function validate(num: number){
    let numList: number[] = (num).toString().split("").map(val => Number(val));

    if(numList.length % 2 === 0){
        for(let i = 0; i < numList.length; i+= 2){
            numList[i] = numList[i] + numList[i];
        }

    } else {
        for(let i = 1; i < numList.length; i+= 2){
            numList[i] = numList[i] + numList[i];
        }
    }

    numList = numList.map((val) => {
        return val > 9 ? val - 9 : val;
    });

    const remainder: number = numList.reduce((acc,nxt) => acc + nxt,0);

    return remainder % 10 === 0;
}

validate(123);
validate(1);
validate(2121);
validate(1230);
// validate(1714);
// validate(12345);
// validate(891);

/* 

1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]

12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]

891 ==> [8, 9*, 1] ==> [8, 18, 1]

*/