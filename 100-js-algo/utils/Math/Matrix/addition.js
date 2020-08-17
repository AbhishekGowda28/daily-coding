// @ts-check

/**
 * @param {number[][]} matrix1
 * @param {number[][]} matrix2
 */
function addition(matrix1, matrix2) {
    const matrix = [];
    for (let row = 0; row < matrix1.length; row++) {
        matrix[row] = [];
        for (let column = 0; column < matrix1[row].length; column++) {
            matrix[row][column] = matrix1[row][column] + matrix2[row][column];
        }
    }

    return matrix;
}

module.exports = addition;
