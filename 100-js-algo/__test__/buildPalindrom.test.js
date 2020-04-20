const expect = require("expect");
const { buildPalindrom } = require("../buildPalindrom");

describe("Build Palindrom", () => {
    test("Single Character", () => {
        const input = "A";
        const expected = "A";
        const actual = buildPalindrom(input);
        expect(actual).toMatch(expected);
    });
    test("Two non repeated Character", () => {
        const input = "AB";
        const expected = "ABBA";
        const actual = buildPalindrom(input);
        expect(actual).toMatch(expected);
    });
    test("Two repeated Character", () => {
        const input = "AA";
        const expected = "AA";
        const actual = buildPalindrom(input);
        expect(actual).toMatch(expected);
    });
    test("Palindrom test 1", () => {
        const input = "abcdc";
        const expected = "abcdcba";
        const actual = buildPalindrom(input);
        expect(actual).toMatch(expected);
    });
    test("Palindrom test 2", () => {
        const input = "mad";
        const expected = "madam";
        const actual = buildPalindrom(input);
        expect(actual).toMatch(expected);
    });
});
