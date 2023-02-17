const isNumber = require("../isNumber");

function subtract(a, b) {
    if (
        !isNumber(a) || !isNumber(b)
    )
        throw new Error (
            "Only numbers can be subtracted!"
        );
    
    return a - b;
}

module.exports = subtract;