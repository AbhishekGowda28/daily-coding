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

function topRightMovement(num, alpha) {
    console.log(chessBoard[num][alpha]);
    num--;
    alpha++;
    console.log(chessBoard[num][alpha]);
}

function topLeftMovement(num, alpha) {
    console.log(chessBoard[num][alpha]);
    num--;
    alpha--;
    console.log(chessBoard[num][alpha]);
}

function downLeftMovement(num, alpha) {
    console.log(chessBoard[num][alpha]);
    num++;
    alpha--;
    console.log(chessBoard[num][alpha]);
}

function downRightMovement(num, alpha) {
    console.log(chessBoard[num][alpha]);
    num++;
    alpha++;
    console.log(chessBoard[num][alpha]);
}

function bishopAndPawn(bishop, pawn) {
    const bishopLocation = findPawn(bishop);
    const pawnLocation = findPawn(pawn);
    console.log("bishop at", bishopLocation);
    console.log("pawn at", pawnLocation);
    topLeftMovement(bishopLocation.outerIndex, bishopLocation.innerIndex);
    topRightMovement(bishopLocation.outerIndex, bishopLocation.innerIndex);
    downLeftMovement(bishopLocation.outerIndex, bishopLocation.innerIndex);
    downRightMovement(bishopLocation.outerIndex, bishopLocation.innerIndex);
}

function findPawn(location) {
    let err;
    chessBoard.forEach((drr, outerIndex) => {
        drr.forEach((element, innerIndex) => {
            if (element === location) {
                err = { outerIndex, innerIndex };
            }
        });
    });

    return err;
}

// module.exports = { bishopAndPawn };

bishopAndPawn("c4", "g8");
