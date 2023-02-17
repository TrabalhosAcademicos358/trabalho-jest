const isNumber = require("./isNumber");
const countDivisors = require("./countDivisors");

function isPrime(a) {
    if(!isNumber(a))
        throw new Error (
            "Cannot tell if non number is prime!"
        );
    
    return countDivisors(a) == 2;
}

module.exports = isPrime;