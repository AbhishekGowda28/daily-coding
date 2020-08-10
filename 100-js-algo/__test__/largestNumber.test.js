const expect = require("expect");
const { largestNumber } = require("../largestNumber");

describe("Larget Number of the range", () => {
    test("Positve Number", () => {
        const number = 5;
        const expected = 99999;
        const actual = largestNumber(number);
        expect(actual).toBe(expected);
    });
    test("Zero", () => {
        const number = 0;
        const expected = 0;
        const actual = largestNumber(number);
        expect(actual).toBe(expected);
    });
    test("Negative Number", () => {
        const number = -2;
        const expected = 0.99;
        const actual = largestNumber(number);
        expect(actual).toBe(expected);
    });
});
