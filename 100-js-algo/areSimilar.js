function sortArray(firstArray, secondArray) {
    firstArray.sort((a, b) => {
        return a - b;
    });
    secondArray.sort((a, b) => {
        return a - b;
    });
}

function areSimilar(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    sortArray(firstArray, secondArray);
    for (let index = 0; index < firstArray.length - 1; index++) {
        if (firstArray[index] !== secondArray[index]) {
            return false;
        }
    }

    return true;
}

module.exports = { areSimilar };
