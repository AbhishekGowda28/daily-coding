// @ts-check

/**
 * @param {any[]} inputArray
 */
function flattenArray(inputArray) {
    const result = [];

    return getElements(inputArray, result);
}

/**
 * @param {any[]} array
 * @param {any[]} result
 */
function getElements(array, result) {
    array.forEach((element) => {
        if (Array.isArray(element)) {
            element = getElements(element, result);
        } else {
            result.push(element);
        }
    });

    return result;
}

module.exports = { flattenArray };
