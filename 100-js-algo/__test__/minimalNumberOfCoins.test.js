const expect = require("expect");
const { minimalNumberOfCoins } = require("../minimalNumberOfCoins");

describe("Minimum Number of Coins", () => {
    test("Use minimum", () => {
        const coins = [1, 2, 5, 10, 50, 100, 200, 500, 2000];
        const price = 54890;
        const expected = 35;
        const actual = minimalNumberOfCoins(coins, price);
        expect(actual).toBe(expected);
    });
    test("Known Value", () => {
        const coins = [1, 2, 10];
        const price = 28;
        const expected = 6;
        const actual = minimalNumberOfCoins(coins, price);
        expect(actual).toBe(expected);
    });
    test("Zero Price", () => {
        const coins = [1, 2, 10];
        const price = 0;
        const expected = 0;
        const actual = minimalNumberOfCoins(coins, price);
        expect(actual).toBe(expected);
    });
});
