function adjacentProduct(matrix) {
    const initalValue = matrix.length > 1 ? matrix[0] * matrix[1] : matrix.length === 1 ? matrix[0] : 0;
    return matrix.reduce((totalProd, element, index) => {
        if (index < matrix.length - 1) {
            const product = element * matrix[index + 1];
            if (product > totalProd) {
                return product;
            }
        }
        return totalProd;
    }, initalValue);
}

console.log(adjacentProduct([]))
console.log(adjacentProduct([1]));
console.log(adjacentProduct([1, -1, 2]))
console.log(adjacentProduct([1, -2]));
console.log(adjacentProduct([1, 2, 3, 4]));
console.log(adjacentProduct([3, 6, -2, -5, 7, 3]));