//@ts-check

/**
 * @param {string} address
 */
function isMAC48Address(address) {
    const splitUp = address.split("-");
    if (splitUp.length === 6) {
        const validLetters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f"];
        for (let counter = 0; counter < 6; counter++) {
            if (!validLetters.includes(splitUp[counter][0]) || !validLetters.includes(splitUp[counter][1]) || splitUp[counter].length !== 2) {
                return false;
            }
        }

        return true;
    }

    return false;
}

module.exports = { isMAC48Address };
