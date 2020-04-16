const expect = require("expect");
const { boxBlur } = require("../boxBlur");

describe("Box Blur", () => {
    test("Blur Image", () => {
        const input = [[1, 1, 1], [1, 7, 1], [1, 1, 1]];
        const expected = [[1]];
        const actual = boxBlur(input);
        expect(actual).toBe(expected);
    });
});
