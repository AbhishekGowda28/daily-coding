function adjacentProduct(matrix) {
    let maxAdjcentProduct = 0;
    let currentProduct = 1;
    matrix.forEach((s, i) => {
        if (i === 0) {
            currentProduct = s;
        } else {
            currentProduct = matrix[i - 1] * s
        }
        if (currentProduct >= maxAdjcentProduct) {
            maxAdjcentProduct = currentProduct;
        }
    });
    return maxAdjcentProduct;
}

adjacentProduct([5, 2, -1, 15, 1, 0, 30, -1]);
adjacentProduct([]);
adjacentProduct([3, 6, -2, -5, 7, 3]);
