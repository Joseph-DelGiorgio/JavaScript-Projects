//LessThan5.js

function lessThanFive(array) {
    return array.filter((el) => {
        return el < 5;
    });
}

module.exports = lessThanFive;


//test.js
const { assert } = require('chai');
const lessThanFive = require('../lessThanFive');

describe('less than five', () => {
    it('should filter a few elements less than 5', () => {
        const expected = [0, 2, 4];
        const actual = lessThanFive([0, 2, 4, 6, 8]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
    it('should filter several elements less than 5', () => {
        const expected = [1, 2, 3, 4];
        const actual = lessThanFive([1, 2, 3, 4, 5, 6, 7, 8]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
});



//OnlyTrue.js

function onlyTrue(array) {
    return array.filter((el) => {
        return el;
    });
}

module.exports = onlyTrue;



//test.js

const { assert } = require('chai');
const onlyTrue = require('../onlyTrue');

describe('only true', () => {
    it('should filter all false values', () => {
        const expected = [];
        const actual = onlyTrue([false, false, false]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
    it('should filter mixed false and true values', () => {
        const expected = [true, true, true];
        const actual = onlyTrue([false, true, true, false, true]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
});


//ShortStrings.js

function shortStrings(array) {
    return array.filter((string) => {
        return string.length <= 3;
    });
}

module.exports = shortStrings;





//Test.js

const { assert } = require('chai');
const shortStrings = require('../shortStrings');

describe('shortStrings', () => {
    it('should filter a few strings', () => {
        const expected = ["abc", "a"];
        const actual = shortStrings(["abc", "abcd", "a"]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
    it('should filter many strings', () => {
        const expected = ["a", "b", "bat", "cde", "f"];
        const actual = shortStrings(["a", "apples", "b", "bats", "bat", "pizza", "cde", "f"]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
});





//TopStudents.js

function topStudents(array) {
    return array.filter((student) => {
        return student.grade >= 90;
    });
}

module.exports = topStudents;



//FirstThree.js

function firstThree(array) {
    return array.filter((str, i) => {
        return i < 3;
    });
}

module.exports = firstThree;


//Unique.js

function unique(array) {
    return array.filter((str, i) => {
        return array.indexOf(str) === i;
    });
}

module.exports = unique;








