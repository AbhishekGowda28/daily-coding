// @ts-check

function updateEncodedLine({ characterCount, encodedLine, previousCharacter }) {
    if (characterCount === 1) {
        return encodedLine += previousCharacter;
    }

    return encodedLine += characterCount + previousCharacter;
}

/**
 * @param {string} line
 */
function lineEncoding(line) {
    let previousCharacter = line[0];
    let encodedLine = "";
    let characterCount = 1;
    for (let count = 1; count <= line.length; count++) {
        if (line[count] === previousCharacter) {
            characterCount++;
        } else {
            encodedLine = updateEncodedLine({ characterCount, encodedLine, previousCharacter });
            characterCount = 1;
            previousCharacter = line[count];
        }
    }

    return encodedLine;
}

module.exports = { lineEncoding };
