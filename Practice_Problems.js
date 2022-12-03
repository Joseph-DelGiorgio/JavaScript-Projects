//palindrome.js:
//A palindrome is a word that is spelled the same forwards as it is backwards.

function isPalindrome(string) {
    return string === reverse(string);
}

function reverse(string) {
    let newStr = "";

    for (let i = string.length - 1; i >= 0; i--) {
        newStr += string[i]
    }

    return newStr;
}

module.exports = isPalindrome;


//sumTogether.js:

function sumTogether(arr1, arr2) {
    let newArr = [];

    for(let i = 0; i < arr1.length; i++) {
        const sum = arr1[i] + arr2[i];
        newArr.push(sum);
    }

    return newArr;
}

module.exports = sumTogether;



//countElements.js:

function countElements(elements) {
    let elementCount = {};
    for(let i = 0; i < elements.length; i++) {
        if(!elementCount[elements[i]]) {
            elementCount[elements[i]] = 1;
        } else {
            elementCount[elements[i]] += 1;
        }
    }

    return elementCount;
}

module.exports = countElements;



//playerHandScore.js:

function playerHandScore(hand) {
    const scores = {
        "K": 4,
        "Q": 3,
        "J": 2
    }

    const handArr = hand.split("");
    let sum = 0;
    for(let i = 0; i < handArr.length; i++) {
        const score = scores[handArr[i]];
        sum += score;
    }

    return sum;
}

module.exports = playerHandScore;
