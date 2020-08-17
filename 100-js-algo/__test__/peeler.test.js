const expect = require("expect");
const peeler = require("../peeler");

describe("String Peeler", () => {
    test("String length is greater than 2", () => {
        const str = "ABCD";
        const expected = "BC";
        const actual = peeler(str);
        expect(actual).toMatch(expected);
    });
    test("String length is  2", () => {
        const str = "AB";
        const expected = "AB";
        const actual = peeler(str);
        expect(actual).toMatch(expected);
    });
    test("Empty String", () => {
        const str = "";
        const expected = "";
        const actual = peeler(str);
        expect(actual).toMatch(expected);
    });
});
