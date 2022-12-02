//hasOne.js:

function hasOne(array) {
    for(let i=0; i<array.length; i++){
        if(array[i]===1){
            return true;
        }
    }
    return false;
}

module.exports = hasOne;



//sumEven.js:

function sumEven(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}

module.exports = sumEven;



//unique.js:

function unique(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        const element = array[i];
        if (newArray.indexOf(element) === -1) {
            newArray.push(element);
        }
    }
    return newArray;
}

module.exports = unique;


//addOne.js:

function addOne(array) {
    for(let i=0; i<array.length;i++){
        array[i]++;
    }

}

module.exports = addOne;



//remove.js:

// given an array of integers
// find all occurrences of num and remove them
function removeOccurrences(array, num) {
    for(let i = array.length - 1; i >= 0; i--) {
        if (array[i] === num) {
            array.splice(i, 1);
        }
    }
}

module.exports = removeOccurrences;
