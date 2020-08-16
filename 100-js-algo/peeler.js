// @ts-check

/**
 * @param {string} str
 */
function peeler(str) {
    if (str.length > 2) {
        str.substring(1, str.length - 1);
    }

    return str;
}

module.exports = peeler;
