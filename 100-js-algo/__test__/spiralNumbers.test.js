const expect = require("expect");
const spiralNumbers = require("../spiralNumbers");

describe("Sprial Array", () => {
    test("Empty Array", () => {
        const num = 0;
        const expected = [[]];
        const actual = spiralNumbers(num);
        expect(actual).toStrictEqual(expected);
    });
    test("Odd Number 5 ", () => {
        const num = 5;
        const expected = [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]];
        const actual = spiralNumbers(num);
        expect(actual).toStrictEqual(expected);
    });
    test("Even Array", () => {
        const num = 2;
        const expected = [[1, 2], [4, 3]];
        const actual = spiralNumbers(num);
        expect(actual).toStrictEqual(expected);
    });
});
