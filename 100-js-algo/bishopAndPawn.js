const chess = require(`./utils/chess`);

function bishopAndPawn(bishop, pawn) {
    const bishopLocation = chess.findPawn(bishop);
    const pawnLocation = chess.findPawn(pawn);

    if (bishopLocation !== undefined && pawnLocation !== undefined) {

        if (chess.BishopMovement.topLeftMovement(bishopLocation, pawn) === false) {
            if (chess.BishopMovement.topRightMovement(bishopLocation, pawn) === false) {
                if (chess.BishopMovement.downLeftMovement(bishopLocation, pawn) === false) {
                    if (chess.BishopMovement.downRightMovement(bishopLocation, pawn) === false) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    return false;
}

module.exports = { bishopAndPawn };
