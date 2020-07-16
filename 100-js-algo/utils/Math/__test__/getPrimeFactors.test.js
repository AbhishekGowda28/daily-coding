const expect = require("expect");
const { getPrimeFactors } = require("../getPrimeFactors");

describe("Factors of Numbers", () => {
    test("Factors of Even Number", () => {
        const input = 150;
        const expected = [2, 3, 5];
        const actual = getPrimeFactors(input);
        expect(actual).toStrictEqual(expected);
    });
    test("Factors of Odd Number", () => {
        const input = 99;
        const expected = [3, 11];
        const actual = getPrimeFactors(input);
        expect(actual).toStrictEqual(expected);
    });
    test("Factors of Negative Number", () => {
        const input = -32;
        const expected = [2];
        const actual = getPrimeFactors(input);
        expect(actual).toStrictEqual(expected);
    });
    test("Factors of 0", () => {
        expect(() => {
            getPrimeFactors(0);
        }).toThrowError("Invalid Input");
    });
    test("Factors of prime Number", () => {
        const input = 23;
        const expected = [23];
        const actual = getPrimeFactors(input);
        expect(actual).toStrictEqual(expected);
    });
    test("Invalid Input", () => {
        expect(() => {
            getPrimeFactors("Number");
        }).toThrowError("Invalid Input");
    });
});
