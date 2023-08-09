function smartSum(){
    console.log(arguments);
    const argsList = Object.values(arguments);
    console.log(argsList);
}

smartSum(1,2,3,[4,5],6);
smartSum(1,2,[[3,4],5],6);;