const expect = require(`expect`);
const { avoidObstacles } = require(`../avoidObstacles`);

describe(`Avoid Obstacles`, () => {
    test(`Random Numbers`, () => {
        const inputArray = [5, 3, 6, 7, 9];
        const expected = 4;
        const actual = avoidObstacles(inputArray);
        expect(actual).toBe(expected);
    });
    test(`Empty input Aray`, () => {
        const inputArray = [];
        const expected = 0;
        const actual = avoidObstacles(inputArray);
        expect(actual).toBe(expected);
    });
    test(`Negative array`, () => {
        const inputArray = [-5, -3, -6, -7, -9];
        const expected = 1;
        const actual = avoidObstacles(inputArray);
        expect(actual).toBe(expected);
    });
    test(`Odd number`, () => {
        const inputArray = [1, 3, 5, 7, 9];
        const expected = 2;
        const actual = avoidObstacles(inputArray);
        expect(actual).toBe(expected);
    });
    test(`Even number`, () => {
        const inputArray = [2, 4, 6, 8];
        const expected = 5;
        const actual = avoidObstacles(inputArray);
        expect(actual).toBe(expected);
    });
    test(`Same element is repeated`, () => {
        const inputArray = [2, 2, 2];
        const expected = 3;
        const actual = avoidObstacles(inputArray);
        expect(actual).toBe(expected);
    });
});
