
const menu = [
    "Burger",
    "Fries",
    "Chicken",
    "Pizza",
    "Sandwich",
    "Onionrings",
    "Milkshake",
    "Coke"
];

function getOrder(rawOrder = "") {
    let result = [];
    let order = rawOrder;

    for(let i = 0; i < menu.length; i++){
        const item = menu[i];

        while(order.includes(item.toLowerCase())){
            let getItem = order.indexOf(item.toLowerCase());
            result.push(item);
            order = order.slice(0,getItem) + order.slice(order.indexOf(item.toLowerCase()) + item.length, order.length);
        }

    }
    
    return result.join(" ");
}

getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza");
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");
getOrder("pizzachickenfriesburgercokemilkshakefriessandwich");
// "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");