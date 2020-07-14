const expect = require("expect");
const { getPrimeNumbers } = require("../getPrimeNumbers");

describe("Get Prime Numbers", () => {
    test("In range of 1 - 10", () => {
        const inputRange = 10;
        const expectedPrimes = [2, 3, 5, 7];
        const actual = getPrimeNumbers(inputRange);
        expect(actual).toStrictEqual(expectedPrimes);
    });

    test("input range is not a number", () => {
        expect(() => {
            const inputRange = "A";
            getPrimeNumbers(inputRange);
        }).toThrowError("Invalid Input");
    });

    test("input range between 10 - 20", () => {
        const inputRange = 20;
        const expectedPrimes = [11, 13, 17, 19];
        const actual = getPrimeNumbers(inputRange);
        expect(actual).toStrictEqual(expectedPrimes);
    });
});
