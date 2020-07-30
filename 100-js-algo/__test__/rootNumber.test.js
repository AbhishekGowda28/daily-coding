const expect = require("expect");
const { rootNumberOfString } = require("../rootNumberOfString");

describe("Root Number", () => {
    test("DOB", () => {
        const inputNumber = "28081994";
        const expected = 5;
        const actual = rootNumberOfString(inputNumber);
        expect(actual).toBe(expected);
    });
});
