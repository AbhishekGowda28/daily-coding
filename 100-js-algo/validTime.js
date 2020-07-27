// @ts-check

/**
 * @param {string} time
 */
function validTime(time) {
    const timeRegex = /([01][0-9]|2[0-3]):([0-5][0-9])/gi;

    return timeRegex.test(time);
}

module.exports = { validTime };
