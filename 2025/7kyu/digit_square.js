
function squareDigits(num = 0){
    return +num.toString().split("").map((v,i) => Math.pow(+v,2)).join("");
}

squareDigits(3212) // 9414

