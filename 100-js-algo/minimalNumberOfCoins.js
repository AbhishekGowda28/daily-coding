// @ts-check

/**
 * @param {number[]} coins
 * @param {number} price
 */
function useCoin(coins, price) {
    const { getInteger } = require("./utils/Math/getInteger");
    for (let count = coins.length - 1; count > -1; count--) {
        if (getInteger(price / coins[count]) > 0) {
            return coins[count];
        }
    }
}

/**
 * @param {number[]} coins
 * @param {number} price
 */
function minimalNumberOfCoins(coins, price) {
    let numberOfCoins = 0;
    while (price) {
        const coin = useCoin(coins, price);
        numberOfCoins++;
        price -= coin;
    }

    return numberOfCoins;
}

module.exports = { minimalNumberOfCoins };
