const expect = require(`expect`);
const { fancyRide } = require(`../fancyRide`);

describe(`Fancy Ride`, () => {
    test(`One of the ride is selected`, () => {
        const faires = [0.3, 0.5, 0.7, 1, 1.3];
        const length = 30;
        const expected = `UberXL`;
        const actual = fancyRide(length, faires);
        expect(actual).toBe(expected);
    });
    test(`Ride is Expensive`, () => {
        const faires = [3, 5, 7, 10, 13];
        const length = 30;
        const expected = `Ride is Expensive`;
        const actual = fancyRide(length, faires);
        expect(actual).toBe(expected);
    });
});
