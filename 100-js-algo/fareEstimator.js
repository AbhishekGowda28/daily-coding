/* eslint-disable max-params */
// @ts-check

/**
 * @param {number} rideTime
 * @param {number} rideDistance
 * @param {number[]} costPerMinute
 * @param {number[]} costPerKm
 */
function fareEstimator(rideTime, rideDistance, costPerMinute, costPerKm) {
    return costPerKm.map((cost, index) => {
        return Number((rideTime * costPerMinute[index] + rideDistance * cost).toFixed(2));
    });
}

module.exports = { fareEstimator };
