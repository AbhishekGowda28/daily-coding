const expect = require(`expect`);
const { houseNumbersSum } = require(`../houseNumbersSum`);

describe(`Sum of Numbers`, () => {
    test(`House numbers`, () => {
        const inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2];
        const expected = 11;
        const actual = houseNumbersSum(inputArray);
        expect(actual).toBe(expected);
    });
});
