function arrayConversion(inputArray) {
    if (inputArray.length === 0) {
        return 0;
    }
    const evenLength = inputArray.length % 2 === 0 ? true : false;
    if (evenLength === false) {
        return "Array doesn't contain even elements";
    }
    let eventItteration = false;
    let total = inputArray;
    while (total.length !== 1) {
        if (eventItteration === false) {
            total = addElements(total);
            eventItteration = true;
        } else {
            total = productElements(total);
            eventItteration = false;
        }
    }

    return total[0];
}

function addElements(array) {
    const sum = [];
    for (let index = 0; index < array.length; index = index + 2) {
        const intermediateSum = array[index] + array[index + 1];
        sum.push(intermediateSum);
    }

    return sum;
}

function productElements(array) {
    const product = [];
    for (let index = 0; index < array.length; index = index + 2) {
        const intermediateProduct = array[index] * array[index + 1];
        product.push(intermediateProduct);
    }

    return product;
}

module.exports = { arrayConversion };
