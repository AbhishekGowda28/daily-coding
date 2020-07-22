/* eslint-disable max-params */

/**
 * @param {number[]} matrix
 */
function getInitalValue(matrix) {
	return matrix.length > 1 ?
		matrix[0] * matrix[1] : matrix.length === 1 ?
			matrix[0] : 0;
}

/**
 * @param {number} totalProd
 * @param {number} element
 * @param {number} index
 * @param {number[]} matrix
 */
function matrixReduction(totalProd, element, index, matrix) {
	if (index < matrix.length - 1) {
		const product = element * matrix[index + 1];
		if (product > totalProd) {
			return product;
		}
	}

	return totalProd;
}

/**
 * @param {number[]} matrix
 */
function adjacentProduct(matrix) {
	const initalValue = getInitalValue(matrix);

	return matrix.reduce(matrixReduction, initalValue);
}

module.exports = {
	adjacentProduct,
};
