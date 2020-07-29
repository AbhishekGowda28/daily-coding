const expect = require(`expect`);
const { buildPalindrom } = require(`../buildPalindrom`);

describe(`Build Palindrom`, () => {
    test(`Single Character`, () => {
        const input = `A`;
        const expected = `A`;
        const actual = buildPalindrom(input);
        expect(actual).toMatch(expected);
    });
    test(`Two non repeated Character`, () => {
        const input = `AB`;
        const expected = `ABA`;
        const actual = buildPalindrom(input);
        expect(actual).toMatch(expected);
    });
    test(`Two repeated Character`, () => {
        const input = `AA`;
        const expected = `AA`;
        const actual = buildPalindrom(input);
        expect(actual).toMatch(expected);
    });
    test(`Palindrom test 1`, () => {
        const input = `abcdc`;
        const expected = `abcdcba`;
        const actual = buildPalindrom(input);
        expect(actual).toMatch(expected);
    });
    test(`Palindrom test 2`, () => {
        const input = `mad`;
        const expected = `madam`;
        const actual = buildPalindrom(input);
        expect(actual).toMatch(expected);
    });
    test(`String already palindrom`, () => {
        const input = `AmmA`;
        const expected = `AmmA`;
        const actual = buildPalindrom(input);
        expect(actual).toMatch(expected);
    });
    test(`Palindrom of a numbers`, () => {
        const input = 12343;
        const expected = 1234321;
        const actual = buildPalindrom(input);
        expect(actual).toBe(expected);
    });
    test(`Palindrom of a numbers`, () => {
        const input = 12321;
        const expected = 12321;
        const actual = buildPalindrom(input);
        expect(actual).toBe(expected);
    });
});
