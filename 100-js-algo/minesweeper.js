// @ts-check

/**
 * @param {boolean[][]} mines
 */
function minesweeper(mines) {
    const mineValues = [];
    for (let row = 0; row < mines.length; row++) {
        mineValues[row] = [];
        for (let column = 0; column < mines[row].length; column++) {
            let count = Number(mines[row][column]);
            count += row === 0 ? 0 : Number(mines[row - 1][column]);
            count += row === mines.length - 1 ? 0 : Number(mines[row + 1][column]);
            count += column === 0 ? 0 : Number(mines[row][column - 1]);
            count += column === mines.length - 1 ? 0 : Number(mines[row][column + 1]);
            mineValues[row][column] = count;
        }
    }

    return mineValues;
}

module.exports = minesweeper;
