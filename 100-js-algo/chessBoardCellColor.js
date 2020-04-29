const chess = require("./utils/chess");

function chessBoardCellColor(cell1, cell2) {
    const cell1Loc = chess.findPawn(cell1);
    const cell2Loc = chess.findPawn(cell2);

    try {
        const cell1Sum = cell1Loc.row + cell1Loc.column;
        const cell2Sum = cell2Loc.row + cell2Loc.column;
        if (cell1Sum === cell2Sum) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return "Cell doesnot exist in the chessboard";
    }
}

module.exports = { chessBoardCellColor };
