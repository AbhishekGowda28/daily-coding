const expect = require("expect");
const { lineEncoding } = require("../lineEncoding");

describe("Line Encoding", () => {
    test("Encod Line", () => {
        const line = "aabbbc";
        const expected = "2a3bc";
        const actual = lineEncoding(line);
        expect(actual).toBe(expected);
    });
});
