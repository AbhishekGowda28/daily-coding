const chess = require("./utils/chess");

function chessBoardCellColor(cell1, cell2) {
    const cell1Loc = chess.findPawn(cell1);
    const cell2Loc = chess.findPawn(cell2);

    try {
        const cell1Sum = cell1Loc.row + cell1Loc.column;
        const cell2Sum = cell2Loc.row + cell2Loc.column;

        return cell1Sum === cell2Sum;
    } catch (error) {
        return "Cell doesnot exist in the chessboard";
    }
}

module.exports = { chessBoardCellColor };
