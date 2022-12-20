//Sum.js

// numbers is an array full of numbers
// let's add all the numbers and return the sum
// i.e. [1,2,3,4,5] => 15
function sum(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
}

module.exports = sum;



//Largest.js

//numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator > currentValue ? accumulator : currentValue;
    }, 1);
}

module.exports = largest;




//RemoveDuplicates.js

// numbers is an array full of numbers
// let's remove any duplicates and return it
// i.e. [2,2,3,5,1,3,4] => [2,3,5,1,4]
function removeDuplicates(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        if(accumulator.indexOf(currentValue) === -1) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
}

module.exports = removeDuplicates;





//Group.js

// food is an array full of food objects
// let's group them by "type" and return them
function group(foods) {
    return foods.reduce((accumulator, currentValue) => {
        accumulator[currentValue.type] = accumulator[currentValue.type] || []
        accumulator[currentValue.type].push(currentValue.food);
        return accumulator;
    }, {});
}

module.exports = group;





// AllUnique.js

// numbers is an array full of integers
// let's figure if all the numbers are unique
// i.e. [1,2,3,1] => false
// [1,2,3] => true
function allUnique(numbers) {
    return numbers.reduce((accumulator, currentValue, index) => {
        if (!accumulator) return false;
        return numbers.indexOf(currentValue) === index;
    }, true);
}

module.exports = allUnique;
