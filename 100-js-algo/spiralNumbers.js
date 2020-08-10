// @ts-check

/**
 * @param {number} num
 */
function spiralNumbers(num) {
    const sprialArray = [];
    let count = 1;
    for (let row = 0; row < num;) {
        for (let column = 0; column < num;) {
            if (sprialArray[row][column] === undefined) {
                sprialArray[row][column] = count++;
                const nextColumn = column + 1;
                if (nextColumn === undefined) {
                    column = nextColumn;
                }
                if (nextColumn >= num) {
                    const nextRow = row + 1;
                    if (nextRow === undefined) {
                        row = nextRow;
                    }
                }
            }
        }
    }
}

module.exports = spiralNumbers;
