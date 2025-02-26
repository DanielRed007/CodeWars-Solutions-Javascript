
function cakes(recipe, available) {
    const ingredients = Object.entries(recipe).sort((a,b) => a[0].localeCompare(b[0]));
    const stock = Object.entries(available).sort((a,b) => a[0].localeCompare(b[0]));

    const filteredStock = stock.map(ingredient => {
        const existOnStock = ingredients.find(ing => ing[0] === ingredient[0]);
        return existOnStock ? ingredient : null;
    }).filter(ing => ing);

    if(filteredStock.length < ingredients.length){
        return 0;
    }

    const averageIngredients = filteredStock.map((ingredient,index) => {
        return Math.floor(ingredient[1] / ingredients[index][1]);
    });

    return averageIngredients.sort((a,b) => a - b)[0];
}

cakes({flour: 500, sugar: 200, eggs: 1},{flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},{sugar: 500, flour: 2000, milk: 2000});