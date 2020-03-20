function areSimilar(firstArray, secondArray) {
    let similar = true;
    if (firstArray.length !== secondArray.length) {
        return false;
    }

    const arr = Array.from(new Set(firstArray));

    arr.forEach((ele) => {
        if (secondArray.includes(ele) === false) {
            similar = false;
        }
    });

    return similar;
}

module.exports = { areSimilar };
