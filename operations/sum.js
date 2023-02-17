const isNumber = require("../isNumber");

function sum(a, b) {
    if (
        !isNumber(a) || !isNumber(b)
    )
        throw new Error (
            "Only numbers can be summed!"
        );
    
    return a + b;
}

module.exports = sum;