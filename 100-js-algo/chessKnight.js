function chessKnight(kinghtCell) {
    const { KnightMovements, findPawn } = require(`./utils/chess`);
    const knightPossibleMoves = Object.keys(KnightMovements);

    const knightLocation = findPawn(kinghtCell);
    let knightMoves = 0;

    knightPossibleMoves.forEach((move) => {
        const location = KnightMovements[move](knightLocation);
        if (location !== undefined) {
            knightMoves++;
        }
    });

    return knightMoves;
}

module.exports = { chessKnight };
