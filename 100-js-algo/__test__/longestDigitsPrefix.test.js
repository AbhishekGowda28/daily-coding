const expect = require("expect");
const { longestDigitsPrefix } = require("../longestDigitsPrefix");

describe("Longest digit Prefix", () => {
    test("No digits", () => {
        const inputString = "ABHISHEK GOWDA";
        const expected = "";
        const actual = longestDigitsPrefix(inputString);
        expect(actual).toBe(expected);
    });
    test("No Alpha characters", () => {
        const inputString = "1234567890";
        const expected = "1234567890";
        const actual = longestDigitsPrefix(inputString);
        expect(actual).toBe(expected);
    });
    test("With alpha numeric characters", () => {
        const inputString = "123aa10abcd123456er";
        const expected = "123456";
        const actual = longestDigitsPrefix(inputString);
        expect(actual).toBe(expected);
    });
});
