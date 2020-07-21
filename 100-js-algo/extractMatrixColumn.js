// @ts-check
/**
 * @param {number} column
 * @param {number[]} matrix
 * @returns {number[]}
 */
function getextractColumnValue(column, matrix) {
    const elements = [];
    if (validateColumn(column, matrix)) {
        /**
         * @param {number} matrixElements
         */
        matrix.forEach((matrixElements) => {
            elements.push(matrixElements[column]);
        });
    }

    return elements;
}

/**
 * @param {number} column
 * @param {number[]} matrix
 */
function validateColumn(column, matrix) {
    return column >= 0 && column < matrix.length;
}

/**
 * @param {number[]} matrix
 * @param {number} column
 */
function validateInput(matrix, column) {
    return !Array.isArray(matrix) || typeof column !== "number";
}

/**
 * @param {number[]} matrix
 * @param {number} column
 */
function extractMatrixColumn(matrix, column) {
    if (validateInput(matrix, column)) {
        throw new Error("Invalid Input");
    }

    return getextractColumnValue(column, matrix);
}

module.exports = { extractMatrixColumn };
