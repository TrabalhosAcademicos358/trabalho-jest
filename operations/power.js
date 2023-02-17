const isNumber = require("../isNumber");

function power(a, b) {
    if (
        !isNumber(a) || !isNumber(b)
    )
        throw new Error (
            "Only numbers can be powered!"
        );
    
    return a ** b;
}

module.exports = power;