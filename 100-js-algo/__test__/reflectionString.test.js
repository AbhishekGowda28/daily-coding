const expect = require("expect");
const reflectionString = require("../reflectionString");

describe("Reflection Of strings", () => {
    test("Reflect String", () => {
        const str = "Hello";
        const expected = "Svool";
        const actual = reflectionString(str);
        expect(actual).toBe(expected);
    });
});
