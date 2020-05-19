import { mapTime } from "../helper/mapTime";

const expect = require("expect");

// These test will be valid in the time of writting as time will vary when test later
// mapTime.js can be added in test ignore list 

describe("Map Time", () => {
    test("Year ago", () => {
        const time = 1518972262000;
        const actualTime = mapTime(time);
        const expected = `2 Years ago`;
        expect(actualTime).toMatch(expected);
    });
    /*
    test("Month ago", () => {
        const time = 1582044341000;
        const actualTime = mapTime(time);
        const expected = `3 Months ago`;
        expect(actualTime).toMatch(expected);
    });
    test("Day ago", () => {
        const time = 1589302001000;
        const actualTime = mapTime(time);
        const expected = `6 Days ago`;
        expect(actualTime).toMatch(expected);
    });
    test("Hour ago", () => {
        const time = 1589759309000;
        const actualTime = mapTime(time);
        const expected = `17 Hours ago`;
        expect(actualTime).toMatch(expected);
    });
    */
});