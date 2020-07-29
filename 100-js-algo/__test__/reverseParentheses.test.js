const expect = require(`expect`);
const { reverseParentheses } = require(`../reverseParentheses`);

describe(`Reverse of Parenthese`, () => {
    test(`Single Parenthese`, () => {
        const inputString = `a(bc)d`;
        const expected = `acbd`;
        const actual = reverseParentheses(inputString);
        expect(actual).toEqual(expected);
    });
    test(`Parenthese strating of the string`, () => {
        const inputString = `(a(bc)d)`;
        const expected = `dbca`;
        const actual = reverseParentheses(inputString);
        expect(actual).toEqual(expected);
    });
    test(`Double Parenthese strating of the string`, () => {
        const inputString = `((a(bc)d))`;
        const expected = `acbd`;
        const actual = reverseParentheses(inputString);
        expect(actual).toEqual(expected);
    });
    test(`No Parenthese`, () => {
        const inputString = `abcd`;
        const actual = reverseParentheses(inputString);
        expect(actual).toEqual(inputString);
    });
});
