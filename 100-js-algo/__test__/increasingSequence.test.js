const expect = require("expect");
const { checkIncreasingSequence } = require("../increasingSequence");

describe("Check for increaing sequence", () => {
    test("Empty array", () => {
        const input = [];
        expect(checkIncreasingSequence(input)).toBeTruthy();
    });
    test("Single element", () => {
        const input = [1];
        expect(checkIncreasingSequence(input)).toBeTruthy();
    });
    test("Two element", () => {
        const input = [2, 1];
        expect(checkIncreasingSequence(input)).toBeFalsy();
    });
    test("Increasing order of elements ", () => {
        const input = [1, 2, 3, 4];
        expect(checkIncreasingSequence(input)).toBeTruthy();
    });
    test("Random order of elements", () => {
        const input = [1, 2, 5, 4];
        expect(checkIncreasingSequence(input)).toBeFalsy();
    });
    test("decreasing order of element", () => {
        const input = [5, 4, 3, 2, 1];
        expect(checkIncreasingSequence(input)).toBeFalsy();
    });
});