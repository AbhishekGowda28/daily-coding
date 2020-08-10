const expect = require("expect");
const { largestOfElements } = require("../largestOfElements");

describe("Larget Elemets", () => {
    test("4 Elements", () => {
        const arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
        const expected = [5, 27, 39, 1001];
        const actual = largestOfElements(arr);
        expect(actual).toStrictEqual(expected);
    });
    test("3 Elements", () => {
        const arr = [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39]];
        const expected = [9, 35, 97];
        const actual = largestOfElements(arr);
        expect(actual).toStrictEqual(expected);
    });
});
