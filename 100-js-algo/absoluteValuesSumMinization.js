function summation(array, element) {
    let sum = 0;
    array.forEach((e) => {
        sum += Math.abs(e - element);
    });
    sum;
    return sum;
}

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

function median(array) {
    array.sort((a, b) => { return a - b });
    const evenArray = array.length % 2;
    return evenArray === 0 ? array[Math.floor(array.length / 2) - 1] : array[Math.floor(array.length / 2)];
}


median([2, 4, 7]);
absoluteValuesSumMinization([2, 4, 7]);
median([1, 1, 3, 4]);
absoluteValuesSumMinization([1, 1, 3, 4]);
median([23]);
absoluteValuesSumMinization([23]);
median([-10, -10, -10, -10, -10, -9, -9, -9, -8, -8, -7, -6, -5, -4, -3, -2, -1, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]);
absoluteValuesSumMinization([-10, -10, -10, -10, -10, -9, -9, -9, -8, -8, -7, -6, -5, -4, -3, -2, -1, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]);
absoluteValuesSumMinization([-4, -1]);
median([-4, -1]);
absoluteValuesSumMinization([0, 7, 9]);
median([0, 7, 9]);
absoluteValuesSumMinization([-1000000, -10000, -10000, -1000, -100, -10, -1, 0, 1, 10, 100, 1000, 10000, 100000, 1000000]);
median([-1000000, -10000, -10000, -1000, -100, -10, -1, 0, 1, 10, 100, 1000, 10000, 100000, 1000000]);
absoluteValuesSumMinization([2, 4, 6, 6, 7]);
median([2, 4, 6, 6, 7]);