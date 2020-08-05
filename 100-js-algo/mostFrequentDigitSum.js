// @ts-check

function sumOfDigits(numbers) {
    numbers = String(numbers);
    numbers = numbers.split("");

    return numbers.reduce((prev, curr) => prev += Number(curr), 0);
}

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

function differenceArr(n) {
    const nums = getTailArr(n);
    console.log({ num: nums });
    const diff = [];
    for (let count = 1; count < nums.length; count++) {
        const res = nums[count - 1] - nums[count];
        diff.push(res);
    }

    return diff;
}

/**
 * @param {number} n
 */
function mostFrequentDigitSum(n) {
    console.log(differenceArr(n));
}

console.log(mostFrequentDigitSum(88));

console.log(mostFrequentDigitSum(8));

// module.export = { mostFrequentDigitSum };
