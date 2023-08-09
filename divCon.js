function divCon(x){
    const ints = x.filter(x => Number.isInteger(x)).reduce((x,y) => x + y,0);
    const strs = x.filter(x => !Number.isInteger(x)).reduce((x,y) => Number(x) + Number(y),0);

    console.log(ints, strs);
    return ints - strs;
}

divCon([9, 3, '7', '3']) // 2
