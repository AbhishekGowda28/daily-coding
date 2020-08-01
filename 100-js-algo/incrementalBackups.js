// @ts-check

const { removeDuplicatesFromArray } = require("./utils/utils");

/**
 * @param {number} a
 * @param {number} b
 */
function sortCompersion(a, b) {
    return a - b;
}

/**
 * @param {number} lastBackupTime
 * @param {number[][]} fileChanges
 */
function incrementalBackups(lastBackupTime, fileChanges) {
    const ids = [];
    fileChanges.forEach((element) => {
        if (!ids.includes(element[1]) && element[0] > lastBackupTime) {
            ids.push(element[1]);
        }
    });

    return removeDuplicatesFromArray(ids.sort(sortCompersion));
}

module.exports = { incrementalBackups };
