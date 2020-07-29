const expect = require(`expect`);
const { depositeProfit } = require(`../depositeProfite`);

describe(`Deposite Profit`, () => {
    test(`Time taken`, () => {
        const initalAmount = 2000;
        const precentage = 8;
        const expectedAmount = 2008;
        const actual = depositeProfit(initalAmount, precentage, expectedAmount);
        const expected = 1;
        expect(actual).toBe(expected);
    });
    test(`When expected is same as inital`, () => {
        const initalAmount = 2000;
        const precentage = 8;
        const expectedAmount = 2000;
        const actual = depositeProfit(initalAmount, precentage, expectedAmount);
        const expected = 0;
        expect(actual).toBe(expected);
    });
});
