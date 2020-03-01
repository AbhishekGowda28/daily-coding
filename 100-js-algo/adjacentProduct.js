// @ts-check

/**
 * @param {number[]} matrix
 */
function adjacentProduct(matrix) {
    let product = 1;
    matrix.forEach((ele, index) => {
        if (index < matrix.length) {
            const adjProduct = ele * matrix[index + 1];
            if (adjProduct > product) {
                product = adjProduct;
            }
        }
    });

    // using reduce
    const last = matrix.reduce((totalProd, element, index) => {
        const product = element * matrix[index + 1];
        if (product > totalProd) {
            return product;
        }
        return totalProd;
    }, 1);
    last;
    product;
    return product;
}

adjacentProduct([]);
adjacentProduct([1, 2, 3, 4]);
adjacentProduct([3, 6, -2, -5, 7, 3]);