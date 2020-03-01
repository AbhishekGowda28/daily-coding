function adjacentProduct(matrix) {
    return matrix.reduce((totalProd, element, index) => {
        const product = element * matrix[index + 1];
        if (product > totalProd) {
            return product;
        }
        return totalProd;
    }, 1);
}

adjacentProduct([]);
adjacentProduct([1, 2, 3, 4]);
adjacentProduct([3, 6, -2, -5, 7, 3]);