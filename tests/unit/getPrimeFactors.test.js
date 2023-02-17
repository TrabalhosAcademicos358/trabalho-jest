const getPrimeFactors = require("../../getPrimeFactors");

jest.mock("../../isPrime", () => (a) => {
    let result;
    
    switch(a) {
        case 2: result = true; break;
        case 3: result = true; break;
        case 4: result = false; break;
        case 5: result = true; break;
        case 6: result = false;
    }

    return result;
});

describe("Tests for getPrimeFactors function", () => {

    it("Doesn't accept non numeric values", () => {
        expect(() => (
            getPrimeFactors("Non number")
        )).toThrow();
    });

    it("Gets prime factors of number 0", () => {
        expect(
            getPrimeFactors(0)
        ).toStrictEqual([]);
    });

    it("Gets prime factors of number 1", () => {
        expect(
            getPrimeFactors(1)
        ).toStrictEqual([]);
    });

    it("Gets prime factors of number 2", () => {
        expect(
            getPrimeFactors(2)
        ).toStrictEqual([2]);
    });

    it("Gets prime factors whole number", () => {
        expect(
            getPrimeFactors(100)
        ).toStrictEqual([2, 2, 5, 5]);
    });

    it("Gets prime factors floating point number", () => {
        expect(
            getPrimeFactors(100.4)
        ).toStrictEqual([2, 2, 5, 5]);
    });

    it("Gets prime factors negative number", () => {
        expect(
            getPrimeFactors(-100)
        ).toStrictEqual([2, 2, 5, 5]);
    });

    it("Gets prime factors negative floating point number", () => {
        expect(
            getPrimeFactors(-100.4)
        ).toStrictEqual([2, 2, 5, 5]);
    });

});