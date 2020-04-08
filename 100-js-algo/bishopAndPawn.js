const chessBoard = [
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
];

function topRightMovement(bishop, pawn) {
    const location = findPawn(bishop);
    let num = location.num;
    let alpha = location.alpha;
    while ((num < 7 && num > 0) && (alpha < 7 && alpha > 0)) {
        console.log("topRightMovement", num, alpha, chessBoard[num][alpha], pawn);
        if (chessBoard[num][alpha] === pawn) {
            return true;
        }
        num++;
        alpha++;
    }

    return false;
}

function topLeftMovement(bishop, pawn) {
    const location = findPawn(bishop);
    let num = location.num;
    let alpha = location.alpha;
    while ((num < 7 && num > 0) && (alpha < 7 && alpha > 0)) {
        num--;
        alpha--;
        console.log("topLeftMovement", num, alpha, chessBoard[num][alpha], pawn);
        if (chessBoard[num][alpha] === pawn) {
            return true;
        }
    }

    return false;
}

function downLeftMovement(bishop, pawn) {
    const location = findPawn(bishop);
    let num = location.num;
    let alpha = location.alpha;
    while ((num < 7 && num > 0) && (alpha < 7 && alpha > 0)) {
        num++;
        alpha--;
        if (chessBoard[num][alpha] === pawn) {
            return true;
        }
    }

    return false;

}

function downRightMovement(bishop, pawn) {
    const location = findPawn(bishop);
    let num = location.num;
    let alpha = location.alpha;
    while ((num < 7 && num > 0) && (alpha < 7 && alpha > 0)) {
        num++;
        alpha++;
        if (chessBoard[num][alpha] === pawn) {
            return true;
        }
    }

    return false;
}

function bishopAndPawn(bishop, pawn) {
    console.log(bishop, pawn);
    if (topLeftMovement(bishop, pawn) === false) {
        if (topRightMovement(bishop, pawn) === false) {
            if (downLeftMovement(bishop, pawn) === false) {
                if (downRightMovement(bishop, pawn) === false) {
                    return false;
                }
            }
        }
    }

    return true;
}

function findPawn(pawn) {
    let location;
    chessBoard.forEach((drr, num) => {
        drr.forEach((element, alpha) => {
            if (element === pawn) {
                location = { num, alpha };
            }
        });
    });

    return location;
}

module.exports = { bishopAndPawn };

// bishopAndPawn("c4", "g8");
