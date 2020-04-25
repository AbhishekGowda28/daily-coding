// @ts-check

/**
 * @param {any[]} array
 * @param {any} element
 * @returns boolean
 */
function checkForElementInArray(array, element) {
    return array.includes(element);
}

/**
 * @param {object} object
 * @param {string} element
 */
function checkForElementInObject(object, element) {
    const data = object[element];

    return data === undefined ? false : true;
}

function getInteger(integerNumber){
    Number((integerNumber).toFixed(0));
}

module.exports = {
    checkForElementInArray,
    checkForElementInObject,
    getInteger
};
