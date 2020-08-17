const expect = require("expect");
const ratingThreshold = require("../ratingThreshold");

describe("Pro Rating Threshold", () => {
    test("Player to review", () => {
        const threshold = [[3, 4], [3, 3, 3, 4], [4]];
        const rating = 3.5;
        const expected = [1];
        const actual = ratingThreshold(threshold, rating);
        expect(actual).toStrictEqual(expected);
    });
    test("Every player to be reviewd", () => {
        const threshold = [[3, 4], [3, 3, 3, 4], [4]];
        const rating = 5;
        const expected = [0, 1, 2];
        const actual = ratingThreshold(threshold, rating);
        expect(actual).toStrictEqual(expected);
    });
    test("No Player tobe review", () => {
        const threshold = [[3, 4], [3, 3, 3, 4], [4]];
        const rating = 1;
        const expected = [];
        const actual = ratingThreshold(threshold, rating);
        expect(actual).toStrictEqual(expected);
    });
});
