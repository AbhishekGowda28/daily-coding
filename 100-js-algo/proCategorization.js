// @ts-check

const utils = require("./utils/utils");

/**
 * @param {string[]} pros
 * @param {string[]} preferences
 */
function proCategorization(pros, preferences) {
    const anotherEmptyArr = [];
    const valueAssign = {};
    pros.forEach((professional, index) => {
        valueAssign[professional] = preferences[index];
    });
    let flatPreference = [];
    flatPreference = utils.flattenArray(preferences, flatPreference);
    console.log({ flatPreference, valueAssign });
    flatPreference.forEach((flat, index) => {
        Object.keys(valueAssign).forEach((val) => {
            console.log(index, flat, val);
        });
    });
}

console.log(proCategorization(["Jack", "Leon", "Maria"],
    [["Computer repair", "Handyman", "House cleaning"],
    ["Computer lessons", "Computer repair", "Data recovery service"], ["Computer lessons", "House cleaning"]]));

module.exports = { proCategorization };
