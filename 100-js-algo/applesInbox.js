// @ts-check
/**
 * @param {number} reminder
 */
function getFruitCount(reminder) {
    if (reminder > 0) {
        return `${reminder} Yellow apples`;
    } else if (reminder < 0) {
        return `${Math.abs(reminder)} Red apples`;
    }

    return `There are same number of Red and Yellow apples`;
}

/**
 * @param {number} numberOfBoxes
 */
function applesInbox(numberOfBoxes) {
    // Yellow apples
    let oddCount = 0;
    // Red apples 
    let evenCount = 0;
    for (let counter = 0; counter <= numberOfBoxes; counter++) {
        if (counter % 2 === 0) {
            evenCount += (counter * counter);
        } else {
            oddCount += (counter * counter);
        }
    }
    const reminder = oddCount - evenCount;

    return getFruitCount(reminder);
}

module.exports = { applesInbox };
