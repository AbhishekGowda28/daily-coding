const expect = require("expect");
const { growingPlant } = require("../growingPlant");

describe("Growing Plant", () => {
    test("Time taken to grow", () => {
        const upSpeed = 100, downSpeed = 20, desiredHeight = 640;
        const expected = 8;
        const actual = growingPlant(upSpeed, downSpeed, desiredHeight);
        expect(actual).toBe(expected);
    });
});
