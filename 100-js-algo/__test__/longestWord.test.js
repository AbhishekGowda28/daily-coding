const expect = require(`expect`);
const { longestWord } = require(`../longestWord`);

describe(`Longest Word in the sentence`, () => {
    test(`Longest word`, () => {
        const sentence = `Ready, steady, go!`;
        const expected = `steady`;
        const actual = longestWord(sentence);
        expect(actual).toEqual(expected);
    });
    test(`All words are of same length`, () => {
        const sentence = `And But are yes`;
        const expected = `yes`;
        const actual = longestWord(sentence);
        expect(actual).toEqual(expected);
    });
});
