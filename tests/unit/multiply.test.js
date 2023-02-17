const multiply = require("../../operations/multiply");

describe("Tests for multiply function", () => {

    it("Multiplies two positive numbers", () => {
        expect (
            multiply(1, 2)
        ).toBe(2);
    });

    it("Multiplies positive and negative numbers", () => {
        expect (
            multiply(100, -100)
        ).toBe(-10000);
    });
    
    it("Multiplies two negative numbers", () => {
        expect (
            multiply(-55, -5)
        ).toBe(275);
    });
    
    it("Accepts only numbers to multiply", () => {
        expect (() =>
            multiply("hi", 10)
        ).toThrow();
    });

});