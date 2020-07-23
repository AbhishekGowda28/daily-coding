const expect = require("expect");
const { firstNotRepeatingCharacter } = require("../firstNotRepeatingCharacter");

describe("First Non Repeating Character", () => {
    test("Presence of Non repeating character", () => {
        const inputString = "abacabad";
        const expected = "c";
        const actual = firstNotRepeatingCharacter(inputString);
        expect(actual).toBe(expected);
    });
    test("All repeated Characters", () => {
        const inputString = "abacabaabacaba";
        const actual = firstNotRepeatingCharacter(inputString);
        expect(actual).toBeUndefined();
    });
});
