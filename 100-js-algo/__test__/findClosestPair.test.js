const expect = require("expect");
const { findClosestPair } = require("../findClosestPair");

describe("Closed Sum Pair", () => {
    test("Pair is found in the array", () => {
        const inputArray = [1, 0, 2, 4, 3, 0];
        const sum = 5;
        const expected = 2;
        const actual = findClosestPair(inputArray, sum);
        expect(actual).toBe(expected);
    });
    test("Pair is not found in the array", () => {
        const inputArray = [2, 3, 7];
        const sum = 8;
        const expected = -1;
        const actual = findClosestPair(inputArray, sum);
        expect(actual).toBe(expected);
    });
});
