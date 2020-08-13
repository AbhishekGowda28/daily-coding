// @ts-check

/**
 * @param {any []} arr
 * @param {string} field
 */
function sortByField(arr, field) {
    return arr.sort((ele1, ele2) => {
        if (isNaN(ele1[field])) {
            return ele1[field].codePointAt(0) - ele2[field].codePointAt(0);
        }

        return ele1[field] - ele2[field];
    });
}

module.exports = sortByField;
