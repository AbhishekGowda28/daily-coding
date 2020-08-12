const expect = require("expect");
const sumAllPrimes = require("../sumAllPrimes");

describe("Sum of Prime Numbers", () => {
    test("Prime Sum", () => {
        const num = 10;
        const expected = 17;
        const actual = sumAllPrimes(num);
        expect(actual).toBe(expected);
    });
});
