const isNumber = require("./isNumber");

function countDivisors(a) {
    if(!isNumber(a))
        throw new Error (
            "Cannot count divisors of non number!"
        );
    
    a = Math.abs(a);
    a = Math.round(a);

    let divisors = 0;

    for(i = 1; i <= a; i++) {
        divisors += (a % i == 0);
    }

    return divisors;
}

module.exports = countDivisors;