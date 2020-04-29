function chessKnight(kinghtCell) {
    const { KnightMovements, findPawn } = require("./utils/chess");
    const knightPossibleMoves = Object.keys(KnightMovements);

    const knightLocation = findPawn(kinghtCell);
    let knightMoves = 0;
    console.log({ knightLocation });

    knightPossibleMoves.forEach((move) => {
        console.log("KnightMovements[move]", KnightMovements[move], move);
        const location = KnightMovements[move](knightLocation);
        if (location !== undefined) {
            knightMoves++;
        }
    });

    return knightMoves;
}

module.exports = { chessKnight };

let knightCell = "C2";
actual = chessKnight(knightCell);
console.log({ actual });
