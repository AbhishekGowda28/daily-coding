const expect = require("expect");
const { isPrime } = require("../isPrime");

describe("Is number prime", () => {
    test("10 is prime", () => {
        const input = 10;
        const actual = isPrime(input);
        expect(actual).toBeFalsy();
    });
    test("19 is prime", () => {
        const input = 19;
        const actual = isPrime(input);
        expect(actual).toBeTruthy();
    });
    test("Providing 1", () => {
        expect(() => {
            isPrime(1);
        }).toThrowError("Invalid Input");
    });
    test("Providing no numbers", () => {
        expect(() => {
            isPrime(false);
        }).toThrowError("Invalid Input");
    });
});
