const isNumber = require("./isNumber");
const isPrime = require("./isPrime");

function getPrimeFactors(a) {
    if(!isNumber(a))
        throw new Error (
            "Cannot get prime factors of non number!"
        );
    
    a = Math.abs(a);
    a = Math.round(a);

    const result = [];

    let i = 2;
    while(i <= a) {
        if(!isPrime(i) || a % i != 0) {
            i++;
            continue;
        };

        result.push(i);
        a /= i;
        i = 2;
    }

    return result;

}

module.exports = getPrimeFactors;