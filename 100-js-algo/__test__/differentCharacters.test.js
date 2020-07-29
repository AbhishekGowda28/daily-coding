const expect = require(`expect`);
const { differentCharacters } = require(`../differentCharacters`);

describe(`Number of different characters in the array`, () => {
    test(`Array is empty`, () => {
        const input = [];
        const expected = 0;
        const actual = differentCharacters(input);
        expect(actual).toBe(expected);
    });
    test(`Array contains 1 element`, () => {
        const input = [`A`];
        const expected = 1;
        const actual = differentCharacters(input);
        expect(actual).toBe(expected);
    });
    test(`Array contains single duplicate element`, () => {
        const input = [`A`, `A`];
        const expected = 1;
        const actual = differentCharacters(input);
        expect(actual).toBe(expected);
    });
    test(`Array contains is string`, () => {
        const input = `Kannada`;
        const expected = 4;
        const actual = differentCharacters(input);
        expect(actual).toBe(expected);
    });
});
