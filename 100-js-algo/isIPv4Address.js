// @ts-check

/**
 * @param {string} ipAddress
 */
function isIPv4Address(ipAddress) {
    const split = ipAddress.split(".");

    return split.length !== 4 ? false : split.every(value => (Number(value) >= 0 && Number(value) < 255));
}

module.exports = { isIPv4Address };
