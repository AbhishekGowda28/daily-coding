const expect = require("expect");
const { arrayMaxConsecutiveSum } = require("../arrayMaxConsecutiveSum");

describe("arrayMaxConsecutiveSum", () => {
    test("Empty Array", () => {
        const inputArray = [];
        const steps = 2;
        const expected = "Array cannot be empty";
        const actual = arrayMaxConsecutiveSum(inputArray, steps);
        expect(actual).toMatch(expected);
    });
    test("Steps with 0", () => {
        const inputArray = [1, 2, 4];
        const steps = 0;
        const expected = "Steps has to be positive integer";
        const actual = arrayMaxConsecutiveSum(inputArray, steps);
        expect(actual).toMatch(expected);
    });
    test("Steps greater than Array", () => {
        const inputArray = [1, 2, 4];
        const steps = 4;
        const expected = "Steps size cannot be more than the array length";
        const actual = arrayMaxConsecutiveSum(inputArray, steps);
        expect(actual).toMatch(expected);
    });
    test("Negative steps", () => {
        const inputArray = [1, 2, 3, 4];
        const steps = -2;
        const expected = "Steps has to be positive integer";
        const actual = arrayMaxConsecutiveSum(inputArray, steps);
        expect(actual).toMatch(expected);
    });
    test("Array With steps 2", () => {
        const inputArray = [2, 3, 5, 1, 6];
        const steps = 2;
        const expected = 8;
        const actual = arrayMaxConsecutiveSum(inputArray, steps);
        expect(actual).toBe(expected);
    });
    test("Array with step 1", () => {
        const inputArray = [2, 3, 5, 1, 6];
        const steps = 1;
        const expected = 6;
        const actual = arrayMaxConsecutiveSum(inputArray, steps);
        expect(actual).toBe(expected);
    });
});
