const expect = require("expect");
const { firstDigit } = require("../firstDigit");

describe("First Digit in the given string", () => {
    test("Number is present", () => {
        const inputString = "q2q-q";
        const expected = "2";
        const actual = firstDigit(inputString);
        expect(actual).toBe(expected);
    });
    test("Number is not present", () => {
        const inputString = "";
        const actual = firstDigit(inputString);
        expect(actual).toBeNull();
    });
});
