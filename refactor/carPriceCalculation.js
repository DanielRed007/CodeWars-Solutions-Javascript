
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    
    let finalPerMonth = 0;
    
    let percentLoss = percentLossByMonth;
    let priceOld = startPriceOld * ((100 - percentLoss) / 100);
    let priceNew = startPriceNew * ((100 - percentLoss) / 100);
    let month = 1;
    finalPerMonth = priceNew - (priceOld + savingperMonth);
    console.log(finalPerMonth, "final", priceOld, "old", priceNew, "new");

    percentLoss += 0.5;
    priceOld = priceOld * ((100 - percentLoss) / 100);
    priceNew = priceNew * ((100 - percentLoss) / 100);
    finalPerMonth = priceNew - (priceOld + savingperMonth);
    
    console.log(finalPerMonth, "final2", priceOld, "old2", priceNew, "new2");

    // while(percentLoss < 3){
    //     if(month % 2){
    //         percentLoss += 0.5
    //     }

    //     console.log(month, "month", percentLoss, "percent");
    // }

    // while(finalPerMonth >= 0){
    //     priceOld = priceOld * ((100 - percentLoss) / 100);
    //     priceNew = priceNew * ((100 - percentLoss) / 100);
    //     finalPerMonth = priceNew - (priceOld + savingperMonth);
    //     console.log(finalPerMonth);
    //     // if(month % 2){
    //     //     percentLoss += 0.5;
    //     // }
    //     // month++;
    // }

    // console.log(finalPerMonth, month);
}

nbMonths(2000, 8000, 1000, 1.5); // [6, 766])
// nbMonths(12000, 8000, 1000, 1.5); // ,[0, 4000])