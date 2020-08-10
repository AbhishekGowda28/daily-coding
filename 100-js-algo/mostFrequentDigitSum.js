// @ts-check

/**
 * @param {string | number | string[]} numbers
 */
function sumOfDigits(numbers) {
    numbers = String(numbers);
    numbers = numbers.split("");

    /**
     * @param {number} prev
     * @param {string} curr
     */
    return numbers.reduce((prev, curr) => prev += Number(curr), 0);
}

/**
 * @param {number} numbers
 */
function getTailArr(numbers) {
    const numArr = [];
    while (numbers > 9) {
        const result = sumOfDigits(numbers);
        numArr.push(numbers);
        numbers -= result;
    }
    numArr.push(numbers);

    return numArr;
}

/**
 * @param {number} num
 * @param {{ [x: string]: number; }} concequence
 */
function getHeighestKey(num, concequence) {
    let heighestCount = 0;
    let heighestKey = num;
    Object.keys(concequence).forEach((key) => {
        if (concequence[key] > heighestCount) {
            heighestCount = concequence[key];
            heighestKey = Number(key);
        }
    });

    return heighestKey;
}

/**
 * @param {number} num
 */
function differenceArr(num) {
    const nums = getTailArr(num);
    const diff = [];
    for (let count = 1; count < nums.length; count++) {
        const res = nums[count - 1] - nums[count];
        diff.push(res);
    }

    return diff;
}

/**
 * @param {number} num
 */
function mostFrequentDigitSum(num) {
    const list = differenceArr(num);
    const concequence = list.reduce((prev, curr) => {
        prev[curr] = (prev[curr] || 0) + 1;

        return prev;
    }, {});

    return getHeighestKey(num, concequence);
}

module.exports = { mostFrequentDigitSum };
