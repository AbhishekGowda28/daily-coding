const expect = require(`expect`);
const { addTwoDigits } = require(`../addTwoDigits`);

describe(`Add two digits`, () => {
    test(`Test for two digits`, () => {
        const input = 29;
        const expected = 11;
        const actual = addTwoDigits(input);
        expect(actual).toEqual(expected);
    });
    test(`Test for three digits`, () => {
        const input = 123;
        const expected = 6;
        const actual = addTwoDigits(input);
        expect(actual).toEqual(expected);
    });
    test(`Test for 0`, () => {
        const input = 0;
        const expected = 0;
        const actual = addTwoDigits(input);
        expect(actual).toEqual(expected);
    });
    test(`Test for single digit`, () => {
        const input = 5;
        const expected = 5;
        const actual = addTwoDigits(input);
        expect(actual).toEqual(expected);
    });
    test(`No arguments provided`, () => {
        const expected = 0;
        const actual = addTwoDigits();
        expect(actual).toEqual(expected);
    });
});
