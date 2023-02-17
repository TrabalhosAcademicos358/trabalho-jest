const isNumber = require("../isNumber");

function multiply(a, b) {
    if (
        !isNumber(a) || !isNumber(b)
    )
        throw new Error (
            "Only numbers can be multiplied!"
        );

    return a * b;
}

module.exports = multiply;