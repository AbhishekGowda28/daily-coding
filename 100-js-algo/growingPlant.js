/* eslint-disable max-params */
// @ts-check

/**
 * @param {number} upSpeed
 * @param {number} downSpeed
 * @param {number} desiredHeight
 */
function growingPlant(upSpeed, downSpeed, desiredHeight) {
    const totalSpeedOfPlant = upSpeed - downSpeed;
    const numberOfDaysNeedToGrow = (desiredHeight / totalSpeedOfPlant);
    
    return Number(numberOfDaysNeedToGrow.toFixed(0));
}

module.exports = { growingPlant };
