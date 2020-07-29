const expect = require(`expect`);
const { findEmailDomain } = require(`../findEmailDomain`);

describe(`Domain Name of a given Email`, () => {
    test(`Mail ID with domain name`, () => {
        const emailID = `abhi.gowda28@gmail.com`;
        const dominName = `gmail.com`;
        const actual = findEmailDomain(emailID);
        expect(actual).toMatch(dominName);
    });
    test(`Mail ID without domain name`, () => {
        const emailID = `ThisIsAMailIdWithoutSperator`;
        const dominName = ``;
        const actual = findEmailDomain(emailID);
        expect(actual).toMatch(dominName);
    });
});
