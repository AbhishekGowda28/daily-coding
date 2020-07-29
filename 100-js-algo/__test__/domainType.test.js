const expect = require(`expect`);
const { domainType } = require(`../domainType`);

describe(`Test Domain list`, () => {
    test(`Domain list`, () => {
        const domain = [`example.com`];
        const actual = domainType(domain);
        const expected = [`commercial`];
        expect(actual).toStrictEqual(expected);
    });
    test(`Domain does not exist`, () => {
        const domain = [`example.abc`];
        const actual = domainType(domain);
        const expected = `Domain does not exist`;
        expect(actual).toMatch(expected);
    });
    test(`Domain does not exist`, () => {
        const domain = [`example.com`, `abc.gov`, `dreamerland.gov`];
        const actual = domainType(domain);
        const expected = [`commercial`, `government`];
        expect(actual).toStrictEqual(expected);
    });
});
