/* eslint-disable max-params */

function depositeProfit(initalAmount, recurringPercentage, expectedProfite) {
    let counter = 0;
    while (expectedProfite > initalAmount) {
        counter++;
        initalAmount += recurringPercentage;
    }

    return counter;
}

module.exports = { depositeProfit };
