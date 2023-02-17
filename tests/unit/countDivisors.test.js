const countDivisors = require("../../countDivisors");

describe("Tests for countDivisors function", () => {

    it("Doesn't accept non numeric value", () => {
        expect(() => (
            countDivisors("hi")
        )).toThrow();
    });

    it("Counts divisors of number 0", () => {
        expect(
            countDivisors(0)
        ).toBe(0);
    });

    it("Counts divisors of number 1", () => {
        expect(
            countDivisors(1)
        ).toBe(1);
    });

    it("Counts divisors of whole number", () => {
        expect(
            countDivisors(6)
        ).toBe(4);
    });

    it("Counts divisors of floating point number", () => {
        expect(
            countDivisors(6.4)
        ).toBe(4);
    });

    it("Counts divisors of prime number", () => {
        expect(
            countDivisors(2)
        ).toBe(2);
    });

    it("Counts divisors of negative whole number", () => {
        expect(
            countDivisors(-6)
        ).toBe(4);
    });

    it("Counts divisors of negative floating point number", () => {
        expect(
            countDivisors(-6.4)
        ).toBe(4);
    });

    it("Counts divisors of negative prime number", () => {
        expect(
            countDivisors(-2)
        ).toBe(2);
    });

});