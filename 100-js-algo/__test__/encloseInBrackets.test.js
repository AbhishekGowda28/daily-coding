const expect = require(`expect`);
const { encloseInBrackets } = require(`../encloseInBrackets`);

describe(`Enclosing of String with bracket`, () => {
    test(`String is not enclosed with bracket`, () => {
        const input = `abacaba`;
        const expected = `(abacaba)`;
        const actual = encloseInBrackets(input);
        expect(actual).toBe(expected);
    });
    test(`String has starting bracket`, () => {
        const input = `(abacaba`;
        const expected = `(abacaba)`;
        const actual = encloseInBrackets(input);
        expect(actual).toBe(expected);
    });
    test(`String contains ending bracket`, () => {
        const input = `abacaba)`;
        const expected = `(abacaba)`;
        const actual = encloseInBrackets(input);
        expect(actual).toBe(expected);
    });
    test(`String already contains bracket`, () => {
        const input = `(abacaba)`;
        const expected = `(abacaba)`;
        const actual = encloseInBrackets(input);
        expect(actual).toBe(expected);
    });
    test(`Invalid Input`, () => {
        expect(() => {
            encloseInBrackets(false);
        }).toThrowError(`Invalid Input`);
    });
});
