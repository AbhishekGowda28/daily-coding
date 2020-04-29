const chessBoard = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];

/**
 * 
 * @param {string} pawn 
 */
function findPawn(pawn) {
    pawn = pawn.toLowerCase();
    let location;
    chessBoard.forEach((drr, row) => {
        drr.forEach((element, column) => {
            if (element === pawn) {
                location = { row, column };
            }
        });
    });

    return location;
}

const BishopMovement = {

    topRightMovement(location, pawn) {
        let row = location.row;
        let column = location.column;
        do {
            if (chessBoard[row][column] === pawn) {
                return true;
            }
            row--;
            column++;
        } while ((row <= 7 && row > 0) && (column <= 7 && column > 0));

        return false;
    },

    topLeftMovement(location, pawn) {
        let row = location.row;
        let column = location.column;
        do {
            if (chessBoard[row][column] === pawn) {
                return true;
            }
            row--;
            column--;
        } while ((row <= 7 && row > 0) && (column <= 7 && column > 0));

        return false;
    },

    downLeftMovement(location, pawn) {
        let row = location.row;
        let column = location.column;
        do {
            if (chessBoard[row][column] === pawn) {
                return true;
            }
            row++;
            column--;
        } while ((row <= 7 && row > 0) && (column <= 7 && column > 0));

        return false;

    },

    downRightMovement(location, pawn) {
        let row = location.row;
        let column = location.column;
        do {
            if (chessBoard[row][column] === pawn) {
                return true;
            }
            row++;
            column++;
        } while ((row <= 7 && row > 0) && (column <= 7 && column > 0));

        return false;
    }

};

const KnightMovements = {
    forwardLeft: function (location) {
        let row = location.row;
        let column = location.column;
        if (row > 1) {
            row -= 2;
        } else {
            console.log("knight forwardLeft move not possible");

            return undefined;
        }
        if (column > 0) {
            column--;
        } else {
            console.log("knight forwardLeft move not possible");

            return undefined;
        }

        return { row, column };
    },
    forwardRight: function (location) {
        let row = location.row;
        let column = location.column;
        if (row > 1) {
            row -= 2;
        } else {
            console.log("knight forwardRight move not possible");

            return undefined;
        }
        if (column < 7) {
            column++;
        } else {
            console.log("knight forwardRight move not possible");

            return undefined;
        }

        return { row, column };
    },
    backwardLeft: function (location) {
        let row = location.row;
        let column = location.column;
        if (row < 5) {
            row += 2;
        } else {
            console.log("knight backwardLeft move not possible");

            return undefined;
        }
        if (column > 0) {
            column--;
        } else {
            console.log("knight backwardLeft move not possible");

            return undefined;
        }

        return { row, column };
    },
    backwardRight: function (location) {
        let row = location.row;
        let column = location.column;
        if (row < 5) {
            row += 2;
        } else {
            console.log("knight backwardRight move not possible");

            return undefined;
        }
        if (column < 7) {
            column++;
        } else {
            console.log("knight backwardRight move not possible");

            return undefined;
        }

        return { row, column };
    }
};

module.exports = { findPawn, BishopMovement, KnightMovements, chessBoard };
