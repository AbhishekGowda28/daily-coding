const expect = require("expect");
const { digitsProduct } = require("../digitsProduct");

describe("Product of digit", () => {
    test("Non prime number", () => {
        const input = 12;
        const expected = 26;
        const actual = digitsProduct(input);
        expect(actual).toBe(expected);
    });
    test("Non prime odd number", () => {
        const input = 15;
        const expected = 35;
        const actual = digitsProduct(input);
        expect(actual).toBe(expected);
    });
    test("Prime number", () => {
        const input = 19;
        const expected = -1;
        const actual = digitsProduct(input);
        expect(actual).toBe(expected);
    });
    test("Negative number", () => {
        const input = -6;
        const expected = 23;
        const actual = digitsProduct(input);
        expect(actual).toBe(expected);
    });
    test("Invalid Input", () => {
        expect(() => {
            digitsProduct("invalid");
        }).toThrowError("Invalid Input");
    });
});
