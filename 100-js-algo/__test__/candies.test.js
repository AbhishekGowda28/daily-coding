const expect = require("expect");
const { candies } = require("../candies");

describe("Candies", () => {
    test("More candies than equal distrubtion", () => {
        const childern = 3;
        const numberOfCandies = 10;
        const expected = 3;
        const actual = candies(childern, numberOfCandies);
        expect(actual).toBe(expected);
    });
    test("Equal candies for equal distrubtion", () => {
        const childern = 3;
        const numberOfCandies = 18;
        const expected = 6;
        const actual = candies(childern, numberOfCandies);
        expect(actual).toBe(expected);
    });
    test("Less candies for distrubtion", () => {
        const childern = 3;
        const numberOfCandies = 2;
        const expected = 0;
        const actual = candies(childern, numberOfCandies);
        expect(actual).toBe(expected);
    });
    test("No childern for distrubtion of candies", () => {
        const childern = 0;
        const numberOfCandies = 2;
        const expected = 0;
        const actual = candies(childern, numberOfCandies);
        expect(actual).toBe(expected);
    });
});
