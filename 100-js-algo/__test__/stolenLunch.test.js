const expect = require("expect");
const stolenLunch = require("../stolenLunch");

describe("Stolen Lunch", () => {
    test("Note", () => {
        const note = "you'll n4v4r 6u4ss 8t: Cd9a";
        const expected = "you'll never guess it: 2390";
        const actual = stolenLunch(note);
        expect(actual).toBe(expected);
    });
});
