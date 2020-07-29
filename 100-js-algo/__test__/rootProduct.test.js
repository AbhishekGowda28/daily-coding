const expect = require(`expect`);
const { rootProduct } = require(`../rootProduct`);

describe(`Root Number`, () => {
    test(`DOB`, () => {
        const inputNumber = `222`;
        const expected = 8;
        const actual = rootProduct(inputNumber);
        expect(actual).toBe(expected);
    });
});
