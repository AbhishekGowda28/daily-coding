function extractMatrixColumn(matrix, column) {
    if (!Array.isArray(matrix) || typeof column !== "number") {
        throw new Error("Invalid Input");
    } else {
        if (column >= 0 && column < matrix.length) {
            const elements = [];
            matrix.forEach((matrixElements) => {
                elements.push(matrixElements[column]);
            });

            return elements;
        } else {
            return [];
        }
    }
}

module.exports = { extractMatrixColumn };
