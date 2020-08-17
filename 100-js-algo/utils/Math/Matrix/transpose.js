// @ts-check

/**
 * @param {any[][]} matrix
 */
function transpose(matrix) {
    const transposeMatrix = [];
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            if (transposeMatrix[column] === undefined) {
                transposeMatrix[column] = [];
            }
            transposeMatrix[column][row] = matrix[row][column];
        }
    }

    return transposeMatrix;
}

module.exports = transpose;
