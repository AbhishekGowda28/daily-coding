const expect = require("expect");
const { fermatFactorization } = require("../fermatFactorization");

describe("Fermat's factorization method", () => {
    test("Simple values with single pass", () => {
        const number = 15;
        const expected = [4, 1];
        const actual = fermatFactorization(number);
        expect(actual).toStrictEqual(expected);
    });

    test("Simple values with single pass", () => {
        const number = 5959;
        const expected = [80, 21];
        const actual = fermatFactorization(number);
        expect(actual).toStrictEqual(expected);
    });
});
