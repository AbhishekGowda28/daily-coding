// @ts-check

/**
 * @param {string} char
 */
function deciperNumber(char) {
    const characterCode = char.codePointAt(0);

    if ((characterCode >= 97 && characterCode <= 122)) {
        return characterCode - 97;
    }
    if ((characterCode >= 65 && characterCode <= 90)) {
        return characterCode - 65;
    }
    if (characterCode >= 48 && characterCode <= 57) {
        return characterCode - 48;
    }

    return char;
}

/**
 * @param {string} char
 */
function deciperText(char) {
    const characterCode = char.codePointAt(0);
    if (characterCode >= 48 && characterCode <= 57) {
        const ch = characterCode - 48;

        return String.fromCodePoint(ch + 97);

    }

    return char;
}

/**
 * @param {string} screateNote
 */
function stolenLunch(screateNote) {
    let deciperNote = "";
    let currentChar = true;
    screateNote.split("").forEach((char) => {
        if (char === ":") {
            currentChar = false;
        }
        if (currentChar) {
            return deciperNote += deciperText(char);
        }
        deciperNote += deciperNumber(char);
    });

    return deciperNote;
}

module.exports = stolenLunch;
