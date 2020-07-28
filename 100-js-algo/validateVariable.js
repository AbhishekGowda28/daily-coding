// @ts-check

/**
 * @param {string} name
 */
function validateVariable(name) {
    const variableRegex = /^[a-z_][a-z_0-9]*$/gi;

    return variableRegex.test(name);
}

module.exports = { validateVariable };
