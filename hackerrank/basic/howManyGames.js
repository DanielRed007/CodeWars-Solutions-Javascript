
function howManyGames(maxPrice, variation, minPrice, budget) {
    let totalGames = 0;

    if(budget < maxPrice) return 0;

    while(budget > minPrice){
        budget -= maxPrice;
        totalGames++;

        if(maxPrice <= 0){
            maxPrice = minPrice;
        }

        if(maxPrice >= minPrice && maxPrice >= variation){
            maxPrice = maxPrice - variation;
        } else {
            maxPrice = minPrice;
        }
        
        if(budget <= 0){
            break;
        }
    }

    return totalGames;
}

// console.log(howManyGames(20,3,6,70));
// console.log(howManyGames(20, 3, 6, 80));
// console.log(howManyGames(20, 3, 6, 85));
console.log(howManyGames(16, 2, 1, 9981)); // 9917
console.log(howManyGames(89, 60, 27, 7777)); // 285
console.log(howManyGames(49, 87, 5, 8120)); // 1615
console.log(howManyGames(100, 1, 1, 99)); // 0
console.log(howManyGames(98, 81, 22, 998)); // 41