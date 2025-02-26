
function bonAppetit(bill = [], k = 0, b = 0) {
    const filteredBill = (bill.filter((item,i) => i !== k).reduce((prev,curr) => prev + curr,0) / 2);


    if(filteredBill === b){
        console.log("Bon Appetit")
    } else {
        console.log(bill[k] / 2)
    }
}


bonAppetit([3,10,2,9],1,12);
bonAppetit([3,10,2,9],1,7);
