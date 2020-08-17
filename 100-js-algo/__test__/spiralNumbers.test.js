const expect = require("expect");
const spiralNumbers = require("../spiralNumbers");

describe("Sprial Array", () => {
    test("Empty Array", () => {
        const num = 0;
        const expected = [[]];
        const actual = spiralNumbers(num);
        expect(actual).toStrictEqual(expected);
    });
    test("Odd Number 7 ", () => {
        const num = 7;
        const expected = [
            [1, 2, 3, 4, 5, 6, 7],
            [24, 25, 26, 27, 28, 29, 8],
            [23, 40, 41, 42, 43, 30, 9],
            [22, 39, 48, 49, 44, 31, 10],
            [21, 38, 47, 46, 45, 32, 11],
            [20, 37, 36, 35, 34, 33, 12],
            [19, 18, 17, 16, 15, 14, 13]
        ];
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
