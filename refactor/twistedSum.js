
function twistedSum(num = 0) {
    
    let result = 0;

    for(let x = 0; x <= num; x++){
        let tempVal = x

        if(x > 9){
            tempVal = x.toString().split("").reduce((prv,nxt) => parseInt(prv) + parseInt(nxt),0);
        }

        result += tempVal;
    }
    
    return result;
}

twistedSum(3) // , 6, "n = 3"); });
twistedSum(10) // 46, "n = 10"); });
twistedSum(11) // 48, "n = 11"); });
twistedSum(12) // 51, "n = 12"); });