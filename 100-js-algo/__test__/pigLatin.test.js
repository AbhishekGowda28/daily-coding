const expect = require("expect");
const { pigLatin } = require("../pigLatin");

describe("Pig latin ", () => {
    test("Starts with Consonant", () => {
        const str = "glove";
        const expected = "oveglay";
        const actual = pigLatin(str);
        expect(actual).toBe(expected);
    });
    test("Starts with Vowel", () => {
        const str = "eight";
        const expected = "eightway";
        const actual = pigLatin(str);
        expect(actual).toBe(expected);
    });
    test("Empty Str", () => {
        const str = "";
        const expected = "";
        const actual = pigLatin(str);
        expect(actual).toBe(expected);
    });
});
