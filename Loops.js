//summation.js:

// find the sum of all 
// positive integer values from 1..n
function summation(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

module.exports = summation;



//factorial.js:

function factorial(n) {
    let total = 1;
    for(let i = 1; i <= n; i++) {
        total *= i;
    }
    return total;
}

module.exports = factorial;



//stringLoops.js:

function scream(n) {
    let scream = "";
    for(let i = 0; i < n; i++) {
        if(i % 2 === 0) {
            scream += "a";
        }
        else {
            scream += "A";
        }
    }
    return scream;
}

module.exports = scream;


//Modulus.js:

function scream(n) {
    let scream = "";
    for(let i = 0; i < n; i++) {
        if(i % 2 === 0) {
            scream += "a";
        }
        else {
            scream += "A";
        }
    }
    return scream;
}

module.exports = scream;


//TopDouble.js:

// determine the largest double of value 
// that is less than the top 
function topDouble(value, top) {
    while(value < top) {
        value *= 2;
    }
    return value / 2;
}

module.exports = topDouble;
