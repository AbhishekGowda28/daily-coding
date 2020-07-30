// @ts-check

const { rootNumberSum } = require("./utils/Math/rootNumber");

/**
 * @param {number} ticketNumber
 */
function luckyTicket(ticketNumber) {
    if (Number(ticketNumber) % 2 === 0) {
        const mid = String(ticketNumber).length / 2;
        const leftHalf = rootNumberSum(String(ticketNumber).slice(0, mid));
        const rightHalf = rootNumberSum(String(ticketNumber).slice(mid));

        return leftHalf === rightHalf;
    }

    return false;
}

module.exports = { luckyTicket };
