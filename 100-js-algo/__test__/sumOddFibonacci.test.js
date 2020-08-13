const expect = require("expect");
const sumOddFibonacci = require("../sumOddFibonacci");

describe("Sum of Odd Fibonacci Numbers", () => {
    test("Count is 10", () => {
        const count = 10;
        const expected = 10;
        const actual = sumOddFibonacci(count);
        expect(actual).toBe(expected);
    });
    test("Count is 1000", () => {
        const count = 1000;
        const expected = 1785;
        const actual = sumOddFibonacci(count);
        expect(actual).toBe(expected);
    });
});
