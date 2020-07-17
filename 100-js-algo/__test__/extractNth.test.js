const expect = require("expect");
const { extractNth } = require("../extractNth");

describe("Extract nth Element of the array", () => {
    test("nth element", () => {
        const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const n = 3;
        const expected = [1, 2, 4, 5, 7, 8, 10];
        const actual = extractNth(inputArray, n);
        expect(actual).toStrictEqual(expected);
    });

    test("N is 0", () => {
        expect(() => {
            const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const n = 0;
            extractNth(inputArray, n);
        }).toThrowError("Invalid Input");
    });

    test("Input array is empty", () => {
        const inputArray = [];
        const n = 3;
        const expected = [];
        const actual = extractNth(inputArray, n);
        expect(actual).toStrictEqual(expected);
    });
});
