// @ts-check

/**
 * @param {number[][]} threshold
 * @param {number} ratings
 */
function ratingThreshold(threshold, ratings) {
    const eachPerson = [];
    threshold.forEach((personsThreshold, index) => {
        if (personsThreshold.reduce((prev, curr) => prev += Number(curr), 0) / personsThreshold.length < ratings) {
            eachPerson.push(index);
        }
    });

    return eachPerson;
}

module.exports = ratingThreshold;
