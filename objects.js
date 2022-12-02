//order.js:

const order = {
    pizzas: 3,
    extraCheese: false,
    deliveryInstructions: "instructions",
};

module.exports = order;



//numberOfPizzas.js:

const ORDER_TYPES = require('./orderTypes');
function numberOfPizzas(orders) {
    let total=0;
    for(let i=0; i<orders.length; i++){
        if (orders[i].type === ORDER_TYPES.PIZZA){
            total += orders[i].pizzas;
        }
    }
    return total;
}

module.exports = numberOfPizzas;



//orderTypes.js:

const ORDER_TYPES = {
    PIZZA:0,
    WINGS:1,
    BURGER:2
}

module.exports = ORDER_TYPES;




//numberOfKeys.js:

function numberOfKeys(object) {
    return Object.keys(object).length;
}

module.exports = numberOfKeys;




//removeSecret.js:

function removeSecret(object) {
    delete object.secret
}

module.exports = removeSecret;
