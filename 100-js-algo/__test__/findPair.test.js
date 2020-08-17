const expect = require("expect");
const findPair = require("../findPair");

describe("Sum Pair", () => {
    test("Pair present", () => {
        const arr = [8, 7, 2, 5, 3, 1];
        const sum = 10;
        const expected = [[8, 2], [7, 3]];
        const actual = findPair(arr, sum);
        expect(actual).toStrictEqual(expected);
    });
    test("Pair Not present", () => {
        const arr = [8, 7, 2, 5, 3, 1];
        const sum = 100;
        const expected = [];
        const actual = findPair(arr, sum);
        expect(actual).toStrictEqual(expected);
    });
});
