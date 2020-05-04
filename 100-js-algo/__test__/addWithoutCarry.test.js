const expect = require("expect");
const { addWithoutCarry } = require("../addWithoutCarry");

describe("Adding without Carry", () => {
    test("Same number of digits", () => {
        const value1 = 152;
        const value2 = 193;
        const expected = 245;
        const actual = addWithoutCarry(value1, value2);
        expect(actual).toBe(expected);
    });
    test("Different length size", () => {
        const value1 = 52;
        const value2 = 193;
        const expected = 145;
        const actual = addWithoutCarry(value1, value2);
        expect(actual).toBe(expected);
    });
});
