const expect = require("expect");
const { centuryFromYear } = require("../centuryFromYear");

describe("Century from the year", () => {
    test("Current year extracted from Date class", () => {
        const year = (new Date()).getFullYear();
        const expected = 21;
        const actual = centuryFromYear(year);
        expect(actual).toBe(expected);
    });
    test("Year 1", () => {
        const year = 1;
        const expected = 1;
        const actual = centuryFromYear(year);
        expect(actual).toBe(expected);
    });
    test("Year in 100's", () => {
        const year = 1900;
        const expected = 19;
        const actual = centuryFromYear(year);
        expect(actual).toBe(expected);
    });
    test("Year not in 100's", () => {
        const year = 1947;
        const expected = 20;
        const actual = centuryFromYear(year);
        expect(actual).toBe(expected);
    });
    test("Year 0", () => {
        const year = 0;
        const expected = "Not a year";
        const actual = centuryFromYear(year);
        expect(actual).toMatch(expected);
    });
});