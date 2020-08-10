// @ts-check

/**
 * @param {string[]} pros
 * @param {string[]} preferences
 */
function factorPreferences(pros, preferences) {
    const utils = require("./utils/utils");
    const valueAssign = {};
    /**
     * @param {string} professional
     * @param {number} index
     */
    pros.forEach((professional, index) => {
        valueAssign[professional] = preferences[index];
    });
    let flatPreference = [];
    flatPreference = utils.flattenArray(preferences, flatPreference);
    flatPreference = utils.removeDuplicatesFromArray(flatPreference).sort();

    return { flatPreference, valueAssign };
}

/**
 * @param {string[]} pros
 * @param {string[]} preferences
 */
function proCategorization(pros, preferences) {
    const anotherEmptyArr = [];
    const { flatPreference, valueAssign } = factorPreferences(pros, preferences);
    flatPreference.forEach((flat) => {
        const professionalNames = [];
        Object.keys(valueAssign).forEach((val) => {
            if (valueAssign[val].includes(flat)) {
                professionalNames.push(val);
            }
        });
        anotherEmptyArr.push([[flat], professionalNames]);
    });

    return anotherEmptyArr;
}

module.exports = { proCategorization };
