const expect = require("expect");
const { lateRide } = require("../lateRide");

describe("Late Ride", () => {
    test("0 minutes", () => {
        const time = 0;
        const expected = 0;
        const actual = lateRide(time);
        expect(actual).toBe(expected);
    });
    test("4 hours", () => {
        const time = 808;
        const expected = 14;
        const actual = lateRide(time);
        expect(actual).toBe(expected);
    });
});
