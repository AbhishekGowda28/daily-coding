/* eslint-disable prefer-const */
/* eslint-disable max-params */
let counter = 0;

function depositeProfit(initalAmount, recurringPercentage, expectedProfite) {
    if (expectedProfite <= recurringPercentage + initalAmount) {
        return counter;
    } else {
        counter++;
        initalAmount = recurringPercentage + initalAmount;

        return depositeProfit(initalAmount, recurringPercentage, expectedProfite);
    }

}

export { depositeProfit };
