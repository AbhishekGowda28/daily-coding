const expect = require("expect");
const arrayConversion = require("../arrayConversion");

describe("Array conversion", () => {
    test("For 8 elements", () => {
        const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
        const expected = 186;
        const actual = arrayConversion(inputArray);
        expect(actual).toBe(expected);
    });
    test("Empty array", () => {
        const inputArray = [];
        const expected = 0;
        const actual = arrayConversion(inputArray);
        expect(actual).toBe(expected);
    });
    test("2 elements", () => {
        const inputArray = [1, 2];
        const expected = 3;
        const actual = arrayConversion(inputArray);
        expect(actual).toBe(expected);
    });
    test("Single elements", () => {
        const inputArray = [1];
        const expected = "Array doesn't contain even elements";
        const actual = arrayConversion(inputArray);
        expect(actual).toMatch(expected);
    });
});
