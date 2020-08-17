const expect = require("expect");
const minesweeper = require("../minesweeper");

describe("Mine Sweeper", () => {
    test("Fine Mines", () => {
        const mines = [[true, false, false], [false, true, false], [false, false, false]];
        const expected = [[1, 2, 0], [2, 1, 1], [0, 1, 0]];
        const actual = minesweeper(mines);
        expect(actual).toStrictEqual(expected);
    });
});
