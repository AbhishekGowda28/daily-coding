const expect = require(`expect`);
const { add, addWithSpreadOperator } = require(`../add`);

describe(`Problem 2`, () => {
    test(`Add `, () => {
        const input = [];
        const expected = 0;
        const actual = add(input);
        expect(actual).toEqual(expected);
    });
    test(`Add  with spread operator`, () => {
        const input = [];
        const expected = 0;
        const actual = addWithSpreadOperator(input);
        expect(actual).toEqual(expected);
    });
    test(`Add with single argument`, () => {
        const input = 4;
        const expected = 4;
        const actual = add(input);
        expect(actual).toEqual(expected);
    });
    test(`Add with spread operator with single argument`, () => {
        const input = 4;
        const expected = 4;
        const actual = addWithSpreadOperator(input);
        expect(actual).toEqual(expected);
    });
    test(`Add with two argument`, () => {
        const expected = 47;
        const actual = add(15, 32);
        expect(actual).toEqual(expected);
    });
    test(`Add with spread operator with two argument`, () => {
        const expected = 47;
        const actual = addWithSpreadOperator(15, 32);
        expect(actual).toEqual(expected);
    });
    test(`Add with multiple argument`, () => {
        const expected = 27;
        const actual = add(1, 3, 15, 8);
        expect(actual).toEqual(expected);
    });
    test(`Add with spread operator with multiple argument`, () => {
        const expected = 27;
        const actual = addWithSpreadOperator(1, 3, 15, 8);
        expect(actual).toEqual(expected);
    });
});
