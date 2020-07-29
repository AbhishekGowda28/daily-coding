const expect = require(`expect`);
const { alphabeticShift } = require(`../alphabeticShift`);

describe(`Shifting of alphabet`, () => {
    test(`Starting alphabets`, () => {
        const input = `abcd`;
        const expected = `bcde`;
        const actual = alphabeticShift(input);
        expect(actual).toMatch(expected);
    });

    test(`Test with special characters`, () => {
        const input = `><:`;
        const expected = `Input is not alphabet`;
        const actual = alphabeticShift(input);
        expect(actual).toMatch(expected);
    });
    test(`Test for empty string`, () => {
        const input = ``;
        const expected = `Please provide input`;
        const actual = alphabeticShift(input);
        expect(actual).toMatch(expected);
    });
    test(`Test with numbers`, () => {
        const input = `123`;
        const expected = `Input is not alphabet`;
        const actual = alphabeticShift(input);
        expect(actual).toMatch(expected);
    });
    test(`String with ending alphabets`, () => {
        const input = `Zebra`;
        const expected = `afcsb`;
        const actual = alphabeticShift(input);
        expect(actual).toMatch(expected);
    });
    test(`Test string crazy`, () => {
        const input = `crazy`;
        const expected = `dsbAz`;
        const actual = alphabeticShift(input);
        expect(actual).toMatch(expected);
    });
});
