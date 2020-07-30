const expect = require("expect");
const { areSimilar } = require("../areSimilar");

describe("Are Array Similar", () => {
    test("Identical array", () => {
        const firstArray = [1, 2, 3];
        const secondArray = [1, 2, 3];
        const actual = areSimilar(firstArray, secondArray);
        expect(actual).toBeTruthy();
    });
    test("Identical array with jumbled elements", () => {
        const firstArray = [1, 2, 3];
        const secondArray = [2, 1, 3];
        const actual = areSimilar(firstArray, secondArray);
        expect(actual).toBeTruthy();
    });
    test("Arrays with not identical elements", () => {
        const firstArray = [1, 2, 2];
        const secondArray = [2, 1, 1];
        const actual = areSimilar(firstArray, secondArray);
        expect(actual).toBeFalsy();
    });
    test("Arguments with one empty array", () => {
        const firstArray = [1, 2, 2];
        const secondArray = [];
        const actual = areSimilar(firstArray, secondArray);
        expect(actual).toBeFalsy();
    });
    test("Arguments with both empty array", () => {
        const firstArray = [];
        const secondArray = [];
        const actual = areSimilar(firstArray, secondArray);
        expect(actual).toBeTruthy();
    });
    test("Arguments with different sized array", () => {
        const firstArray = [1, 2, 2, 1];
        const secondArray = [2, 1, 2];
        const actual = areSimilar(firstArray, secondArray);
        expect(actual).toBeFalsy();
    });
});
