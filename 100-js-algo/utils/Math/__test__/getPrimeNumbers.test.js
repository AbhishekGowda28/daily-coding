const expect = require("expect");
const { getPrimeNumbers } = require("../getPrimeNumbers");

describe("Get Prime Numbers", () => {
    test("In range of 2 - 10", () => {
        const start = 2;
        const end = 10;
        const expectedPrimes = [2, 3, 5, 7];
        const actual = getPrimeNumbers(start, end);
        expect(actual).toStrictEqual(expectedPrimes);
    });

    test("input range is not a number", () => {
        expect(() => {
            const start = "A";
            const end = "Z";
            getPrimeNumbers(start, end);
        }).toThrowError("Invalid Input");
    });

    test("input range between 10 - 20", () => {
        const start = 10, end = 20;
        const expectedPrimes = [11, 13, 17, 19];
        const actual = getPrimeNumbers(start, end);
        expect(actual).toStrictEqual(expectedPrimes);
    });

});
