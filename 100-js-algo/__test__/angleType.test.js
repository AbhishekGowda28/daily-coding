const expect = require(`expect`);
const { angleType } = require(`../angleType`);

describe(`Angle Types`, () => {
    test(`Angle is  0`, () => {
        const angle = -15;
        const actual = angleType(angle);
        const expected = `Angle is less than 0`;
        expect(actual).toMatch(expected);
    });
    test(`Angle is  0`, () => {
        const angle = 0;
        const actual = angleType(angle);
        const expected = `acute`;
        expect(actual).toMatch(expected);
    });
    test(`Right`, () => {
        const angle = 90;
        const actual = angleType(angle);
        const expected = `right`;
        expect(actual).toMatch(expected);
    });
    test(`Obtuse Angle`, () => {
        const angle = 135;
        const actual = angleType(angle);
        const expected = `obtuse`;
        expect(actual).toMatch(expected);
    });
    test(`Angle is 180`, () => {
        const angle = 180;
        const actual = angleType(angle);
        const expected = `straight`;
        expect(actual).toMatch(expected);
    });
    test(`Angle is more than 180`, () => {
        const angle = 270;
        const actual = angleType(angle);
        const expected = `Angle is more than 180`;
        expect(actual).toMatch(expected);
    });
});
