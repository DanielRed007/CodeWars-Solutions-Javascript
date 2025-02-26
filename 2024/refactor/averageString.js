function averageString(numString = "") {
    const nums = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };

    const strNums = numString.split(" ");
    const avg = Math.floor(strNums.map(num => nums[num]).reduce((acc,nxt) => acc + nxt,0) / strNums.length);
    console.log(avg)
    if(avg <= 9 && avg >= 0){
        return Object.entries(nums).find(str => str[1] === avg)[0];
    } else {
        return "n/a";
    }
}

averageString("zero nine five two") //, "four");
averageString("four six two three") //, "three");
averageString("one two three four five") //, "three");
averageString("five four") //, "four");
averageString("zero zero zero zero zero") //, "zero");
averageString("one one eight one") //, "two");
averageString("") //, "n/a");