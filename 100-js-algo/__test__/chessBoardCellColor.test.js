const expect = require(`expect`);
const { chessBoardCellColor } = require(`../chessBoardCellColor`);

describe(`Chess Board Cell Color`, () => {
    test(`Same cell`, () => {
        const cell1 = `A1`, cell2 = `A1`;
        const actual = chessBoardCellColor(cell1, cell2);
        expect(actual).toBeTruthy();
    });
    test(`Vertical adjacent cells`, () => {
        const cell1 = `A1`, cell2 = `B1`;
        const actual = chessBoardCellColor(cell1, cell2);
        expect(actual).toBeFalsy();
    });
    test(`Horizonatal adjacent cells`, () => {
        const cell1 = `A1`, cell2 = `A2`;
        const actual = chessBoardCellColor(cell1, cell2);
        expect(actual).toBeFalsy();
    });
    test(`Random cells`, () => {
        const cell1 = `A1`, cell2 = `H3`;
        const actual = chessBoardCellColor(cell1, cell2);
        expect(actual).toBeFalsy();
    });
    test(`Cell doesnot exist in the chessboard`, () => {
        const cell1 = `A1`, cell2 = `I3`;
        const expected = `Cell doesnot exist in the chessboard`;
        const actual = chessBoardCellColor(cell1, cell2);
        expect(actual).toMatch(expected);
    });
});
