const expect = require("expect");
const { avoidObstacles } = require("../avoidObstacles");

describe("Avoid Obstacles", () => {
    test("Test case 1", () => {
        const inputArray = [5, 3, 6, 7, 9];
        const expected = 4;
        const actual = avoidObstacles(inputArray);
        expect(actual).toBe(expected);
    });
    test("Empty input Aray", () => {
        const inputArray = [];
        const expected = 0;
        const actual = avoidObstacles(inputArray);
        expect(actual).toBe(expected);
    });
    test("Negative array", () => {
        const inputArray = [-5, -3, -6, -7, -9];
        const expected = 1;
        const actual = avoidObstacles(inputArray);
        expect(actual).toBe(expected);
    });
    test("Odd number", () => {
        const inputArray = [1, 3, 5, 7, 9];
        const expected = 2;
        const actual = avoidObstacles(inputArray);
        expect(actual).toBe(expected);
    });
});
