// @ts-check
/**
 * @param {number} uberDriveIndex
 */
function drive(uberDriveIndex) {
    const UBER_DRIVE = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
    if (uberDriveIndex === -1) {
        return "Ride is Expensive";
    }

    return UBER_DRIVE[uberDriveIndex];
}

/**
 * @param {number} length
 * @param {number[]} faires
 */
function fancyRide(length, faires) {
    const FREE_MONEY = 20;
    let uberDriveIndex = -1;
    /**
     * @param {number} fair
     * @param {number} index
     */
    faires.forEach((fair, index) => {
        if ((length * fair) <= FREE_MONEY) {
            uberDriveIndex = index;
        }
    });

    return drive(uberDriveIndex);
}

module.exports = { fancyRide };
