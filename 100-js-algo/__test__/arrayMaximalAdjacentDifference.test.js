const expect = require(`expect`);
const { arrayMaximalAdjacentDifference } = require(`../arrayMaximalAdjacentDifference`);

describe(`Maximal Adjacent Difference`, () => {
    test(`Empty Array`, () => {
        const inputArray = [];
        const expected = 0;
        const actual = arrayMaximalAdjacentDifference(inputArray);
        expect(actual).toBe(expected);
    });
    test(`Array`, () => {
        const inputArray = [2, 4, 1, 0];
        const expected = 3;
        const actual = arrayMaximalAdjacentDifference(inputArray);
        expect(actual).toBe(expected);
    });
    test(`Elements are same`, () => {
        const inputArray = [2, 2, 2];
        const expected = 0;
        const actual = arrayMaximalAdjacentDifference(inputArray);
        expect(actual).toBe(expected);
    });
    test(`Consecutive natural elements`, () => {
        const inputArray = [1, 2, 3];
        const expected = 1;
        const actual = arrayMaximalAdjacentDifference(inputArray);
        expect(actual).toBe(expected);
    });
    test(`Even number`, () => {
        const inputArray = [2, 4, 6];
        const expected = 2;
        const actual = arrayMaximalAdjacentDifference(inputArray);
        expect(actual).toBe(expected);
    });
    test(`Odd numbers`, () => {
        const inputArray = [1, 3, 5];
        const expected = 2;
        const actual = arrayMaximalAdjacentDifference(inputArray);
        expect(actual).toBe(expected);
    });
    test(`Negative numbers`, () => {
        const inputArray = [-11, -3, -95];
        const expected = 92;
        const actual = arrayMaximalAdjacentDifference(inputArray);
        expect(actual).toBe(expected);
    });
    test(`Negative and positive numbers`, () => {
        const inputArray = [-11, 52, -95];
        const expected = 147;
        const actual = arrayMaximalAdjacentDifference(inputArray);
        expect(actual).toBe(expected);
    });
});
