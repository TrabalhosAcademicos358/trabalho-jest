const sum = require("../../operations/sum");

describe("Tests for sum function", () => {

    it("Adds two positive numbers", () => {
        expect (
            sum(1, 2)
        ).toBe(3);
    });

    it("Adds positive and negative numbers", () => {
        expect (
            sum(100, -100)
        ).toBe(0);
    });
    
    it("Adds two negative numbers", () => {
        expect (
            sum(-55, -5)
        ).toBe(-60);
    });
    
    it("Accepts only numbers to sum", () => {
        expect (() =>
            sum("hi", 10)
        ).toThrow();
    });

});