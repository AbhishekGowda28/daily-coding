const expect = require("expect");
const vowelsCount = require("../vowelsCount");

describe("Vowel count", () => {
    test("Vowel count in a word", () => {
        const str = "Hello World. This is first output C Programming book";
        const expected = 14;
        const actual = vowelsCount(str);
        expect(actual).toBe(expected);
    });
});
