const expect = require("expect");
const uniqueDigitProducts = require("../uniqueDigitProducts");

describe("Unique Digit Products", () => {
    test("uniqueDigitProducts", () => {
        const arr = [2, 8, 121, 42, 222, 23];
        const expected = 3;
        const actual = uniqueDigitProducts(arr);
        expect(actual).toBe(expected);
    });
});
