const expect = require(`expect`);
const { addBorder } = require(`../addBorder`);

describe(`Add Border`, () => {
    test(`Two elements`, () => {
        const input = [`abc`, `def`];
        const expected = [`*****`, `*abc*`, `*def*`, `*****`];
        const actual = addBorder(input);
        expect(actual).toEqual(expected);
    });
    test(`single element`, () => {
        const input = [`af`];
        const expected = [`****`, `*af*`, `****`];
        const actual = addBorder(input);
        expect(actual).toEqual(expected);
    });
    test(`Empty string`, () => {
        const input = [``];
        const expected = [`**`, `**`, `**`];
        const actual = addBorder(input);
        expect(actual).toEqual(expected);
    });
    test(`Empty Array`, () => {
        const input = [];
        const expected = [`**`, `**`];
        const actual = addBorder(input);
        expect(actual).toEqual(expected);
    });
});
