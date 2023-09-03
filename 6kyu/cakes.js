let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

function cakes(recipe, available) {
    let totals = [];

    for(let ingredient in available){
        if(!recipe[ingredient]) delete available[ingredient];
    }

    for(let ingredient in recipe){
        if(!available[ingredient]) return 0;
    }

    for(let ingredient in available){
        const total = Math.floor(available[ingredient] / recipe[ingredient]);
        totals.push(total);
    }
    
    return Math.min(...totals);
}

cakes(recipe,available); // 2

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};

cakes(recipe,available); // 0