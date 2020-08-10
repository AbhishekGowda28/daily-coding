const expect = require("expect");
const { mostFrequentDigitSum } = require("../mostFrequentDigitSum");

describe("Most Frequent Digit", () => {
    test("2 digit number", () => {
        const num = 88;
        const expected = 9;
        const actual = mostFrequentDigitSum(num);
        expect(actual).toBe(expected);
    });

    test("Single Digit", () => {
        const num = 8;
        const expected = 8;
        const actual = mostFrequentDigitSum(num);
        expect(actual).toBe(expected);
    });

    test("Hundred", () => {
        const num = 100;
        const expected = 9;
        const actual = mostFrequentDigitSum(num);
        expect(actual).toBe(expected);
    });
});
