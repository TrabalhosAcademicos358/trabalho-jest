const isPrime = require("../../isPrime");

jest.mock("../../countDivisors", () => (a) => {
    let result;
    
    switch(a) {
        case 0: result = 0; break;
        case 1: result = 1; break;
        case 2: result = 2; break;
        case 3: result = 2; break;
        case 4: result = 3;
    }

    return result;
});

describe("Tests for isPrime function", () => {

    it("Doesn't accept non numeric values", () => {
        expect(() => (
            isPrime("Non number")
        )).toThrow();
    });

    it("Tells if number 0 is prime", () => {
        expect(
            isPrime(0)
        ).toBe(false);
    });

    it("Tells if number 1 is prime", () => {
        expect(
            isPrime(1)
        ).toBe(false);
    });

    it("Tells if prime number is prime", () => {
        expect(
            isPrime(2)
        ).toBe(true);
    });

    it("Tells if non prime number is prime", () => {
        expect(
            isPrime(4)
        ).toBe(false);
    });

});