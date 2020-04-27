const expect = require("expect");
const { chessKnight } = require("../chessKnight");

describe("Number of moves possible by Knight", () => {
    test("Knight at the corner of the board", () => {
        const knightCell = "A1";
        const expected = 2;
        const actual = chessKnight(knightCell);
        expect(actual).toBe(expected);
    });
    test("Knight not in the corner of the board", () => {
        const knightCell = "C2";
        const expected = 6;
        const actual = chessKnight(knightCell);
        expect(actual).toBe(expected);
    });
});
