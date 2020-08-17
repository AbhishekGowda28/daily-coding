// @ts-check

/**
 * @param {number} scalarValue
 * @param {number[][]} matrix
 */
function sclarMultiplication(scalarValue, matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            matrix[row][column] *= scalarValue;
        }
    }

    return matrix;
}

module.exports = sclarMultiplication;
