//startsWithX.js:

function startsWithX(string) {
    if(string[0]==="x"){
        return true;
    }

    else if(string[0]==="X"){
        return true;
    }
    else{
        return false;
    }
}

module.exports = startsWithX;



//endsWithX.js:

function endsWithX(string) {
    if(string[string.length - 1].toLowerCase() === "x") {
        return true;
    }
    return false;
}

module.exports = endsWithX;

//isAllX.js:

function isAllX(string) {
    for(let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() !== "x") {
            return false;
        }
    }
    return true;
}

module.exports = isAllX;



//findFirstX.js:

function findFirstX(string) {
   return string.indexOf("x")
}

module.exports = findFirstX;



//splitAtX.js:

// split the string at the first occurrence of x
// return the larger of the two resulting strings
// i.e. HappyxDeveloper => Developer
function splitAtX(string) {
    const index = string.indexOf('x');
    const a = string.slice(0,index);
    const b = string.slice(index+1);
    return (a.length > b.length) ? a : b;
}

function splitAtX(string){
    const index=string.indexOf("x");
    const a=string.slice(0,index);
    const b= string.slice(index+1);
    return (a.length>b.length) ? a:b
}

module.exports = splitAtX;
