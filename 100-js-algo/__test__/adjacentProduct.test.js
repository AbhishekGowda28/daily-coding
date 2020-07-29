const expect = require(`expect`);
const { adjacentProduct } = require(`../adjacentProduct`);

describe(`Adjacent Product`, () => {
    test(`Empty Array`, () => {
        const input = [];
        const expected = 0;
        const actual = adjacentProduct(input);
        expect(actual).toEqual(expected);
    });
    test(`Single element`, () => {
        const input = [1];
        const expected = 1;
        const actual = adjacentProduct(input);
        expect(actual).toEqual(expected);
    });
    test(`Three element`, () => {
        const input = [1, -1, 2];
        const expected = -1;
        const actual = adjacentProduct(input);
        expect(actual).toEqual(expected);
    });
    test(`Two element`, () => {
        const input = [1, -2];
        const expected = -2;
        const actual = adjacentProduct(input);
        expect(actual).toEqual(expected);
    });
    test(`With negative elements`, () => {
        const input = [3, 6, -2, -5, 7, 3];
        const expected = 21;
        const actual = adjacentProduct(input);
        expect(actual).toEqual(expected);
    });
    test(`All positive elements`, () => {
        const input = [1, 2, 3, 4];
        const expected = 12;
        const actual = adjacentProduct(input);
        expect(actual).toEqual(expected);
    });
    test(`All negative elements`, () => {
        const input = [-1, -2, -3, -4];
        const expected = 12;
        const actual = adjacentProduct(input);
        expect(actual).toEqual(expected);
    });
    test(`All are 0's`, () => {
        const input = [0, 0, 0, 0];
        const expected = 0;
        const actual = adjacentProduct(input);
        expect(actual).toEqual(expected);
    });
});
