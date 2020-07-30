const expect = require("expect");
const { chessKnight } = require("../chessKnight");

describe("Number of moves possible by Knight", () => {
    test("Knight at the lower left corner of the board", () => {
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
    test("Knight at the lower right corner of the board", () => {
        const knightCell = "H1";
        const expected = 2;
        const actual = chessKnight(knightCell);
        expect(actual).toBe(expected);
    });
    test("Knight at the upper left corner of the board", () => {
        const knightCell = "A8";
        const expected = 2;
        const actual = chessKnight(knightCell);
        expect(actual).toBe(expected);
    });
    test("Knight at the upper right corner of the board", () => {
        const knightCell = "H8";
        const expected = 2;
        const actual = chessKnight(knightCell);
        expect(actual).toBe(expected);
    });
    test("Knight at the center of the board", () => {
        const knightCell = "D4";
        const expected = 8;
        const actual = chessKnight(knightCell);
        expect(actual).toBe(expected);
    });
});
