const expect = require("expect");
const { validTime } = require("../validTime");

describe("Validate Time", () => {
    test("24 Hours", () => {
        const time = "13:58";
        const actual = validTime(time);
        expect(actual).toBeTruthy();
    });
    test("Invalid Hour", () => {
        const time = "25:51";
        const actual = validTime(time);
        expect(actual).toBeFalsy();
    });
    test("Invalid minute", () => {
        const time = "13:72";
        const actual = validTime(time);
        expect(actual).toBeFalsy();
    });
    test("12 Hours", () => {
        const time = "06:15";
        const actual = validTime(time);
        expect(actual).toBeTruthy();
    });
});
