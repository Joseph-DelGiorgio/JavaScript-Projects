//eitherNotBoth.js

function eitherNotBoth(num) {
    if ((num % 3 === 0 && num % 5 !== 0) || (num % 5 === 0 && num % 3 !== 0)) {
        return true;
    } else {
        return false;
    }
}

module.exports = eitherNotBoth;


//fizzBuzz.js

function fizzBuzz(numbers) {
    let str = "";
    for(let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 3 === 0) {
            str += "fizz";
        }  
        if (number % 5 === 0) {
            str += "buzz";
        } 
    }
    return str;
}

module.exports = fizzBuzz;

//This.js

function thisName() {
    return this.name;
}

module.exports = thisName.bind({ name: 'Bob' });


//namedObject.js

const obj = {
    name: 'Bob',
    getName: function(){
        return this.name;
    }
}

module.exports = obj;


//Celeberty.js

const fetchAge = require('./fetchAge');

function Celebrity(name) {
    this.name = name;

    fetchAge(this.name,(age)=> {
        this.age = age;
    });
}

module.exports = Celebrity;



//FetchAge.js

const celebrities = {
    'Will Smith': 51,
    'Matt Damon': 49,
}

function fetchAge(name, cb) {
    cb(celebrities[name]);
}

module.exports = fetchAge;


//test.js

const { assert } = require('chai');
const Celebrity = require('../Celebrity');

describe('Celebrity', () => {
    describe('Will Smith', () => {
        const celebrity = new Celebrity("Will Smith");

        it('should set their name', () => {
            assert.equal(celebrity.name, "Will Smith");
        });

        it('should set their age', () => {
            assert.equal(celebrity.age, 51);
        });
    });

    describe('Matt Damon', () => {
        const celebrity = new Celebrity("Matt Damon");

        it('should set their name', () => {
            assert.equal(celebrity.name, "Matt Damon");
        });

        it('should set their age', () => {
            assert.equal(celebrity.age, 49);
        });
    });
});


