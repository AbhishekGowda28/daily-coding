// @ts-check
/**
 * @param {number} startRange
 * @param {number} endRange
 */
function checkForValidNumber(startRange, endRange) {
    return ((typeof endRange === "number" || typeof startRange === "number") && startRange > 1);
}

/**
 * @param {number} startRange
 * @param {number} endRange
 */
function prepareNumbers(startRange, endRange) {
    const numbers = [];
    for (let index = startRange; index <= endRange; index++) {
        numbers[index] = true;
    }

    return numbers;
}

/**
 * @param {boolean[]} numbers
 */
function extractPrimeNumbers(numbers) {
    const primes = [];
    /**
     * @param {boolean} isPrime
     * @param {any} index
     */
    numbers.forEach((isPrime, index) => {
        if (isPrime === true) {
            primes.push(index);
        }
    });

    return primes;
}
/**
 * @param {number} endRange
 * @param {boolean[]} numbers
 */
function filterPrimeNumbers(endRange, numbers) {
    for (let count = 2; count <= Math.sqrt(endRange);) {
        let nextFactor = count * count;
        while (nextFactor <= endRange) {
            if (numbers[nextFactor] === true) {
                numbers[nextFactor] = false;
            }
            nextFactor += count;
        }
        count++;
        while (numbers[count] === false) {
            count++;
        }
    }
}
/**
 * @param {number} startRange
 * @param {number} endRange
 */
function getPrimeNumbers(startRange, endRange) {
    if (checkForValidNumber(startRange, endRange)) {
        const numbers = prepareNumbers(startRange, endRange);
        filterPrimeNumbers(endRange, numbers);

        return extractPrimeNumbers(numbers);
    }
    throw new Error("Invalid Input");
}

module.exports = { getPrimeNumbers };
