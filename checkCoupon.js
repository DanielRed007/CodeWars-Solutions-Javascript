
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    const curr = new Date(currentDate);
    const exp = new Date(expirationDate);
    
    return enteredCode === correctCode && curr < exp;
}

checkCoupon('123','123','September 5, 2014','October 1, 2014');
checkCoupon('123a','123','September 5, 2014','October 1, 2014');