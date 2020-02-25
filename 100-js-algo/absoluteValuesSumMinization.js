// @ts-check

/**
 * @param {number[]} [array]
 * @param {number} element
 */
function summation(array, element) {
    let err = 0;
    array.forEach((e, i) => {
        err += Math.abs(array[i] - element);
    });
    err;
    return err;
}

/**
 * @param {number[]} arr
 */
function absoluteValuesSumMinization(arr) {
    let smallest = summation(arr, arr[0]);
    smallest;
    let returnValue = arr[0];
    arr.forEach(ele => {
        const temp = summation(arr, ele);
        if (temp < smallest) {
            smallest = temp;
            returnValue = ele;
        }
        smallest;
    });
    returnValue;
    return returnValue;
}

// const c = absoluteValuesSumMinization([]);
const c = absoluteValuesSumMinization([1, 4, 5,]);
// const c = absoluteValuesSumMinization([4, 5, 1]);
// const c = absoluteValuesSumMinization([5, 4, 1]);
// const c = absoluteValuesSumMinization([2, 4, 7]);
// const c = absoluteValuesSumMinization([2, 4, 7, 6]);
// const c = absoluteValuesSumMinization([2, 4, 7, 6, 6]);
// const c = absoluteValuesSumMinization([2, 4, 5, 7, -2, 6, 8]);
// const c = absoluteValuesSumMinization([1]);

c