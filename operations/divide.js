const isNumber = require("../isNumber");

function divide(a, b) {
    if (
        !isNumber(a) || !isNumber(b)
    )
        throw new Error (
            "Only numbers can be divided!"
        );
    
    return a * b;
}

module.exports = divide;