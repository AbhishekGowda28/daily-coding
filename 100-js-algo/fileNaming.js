/* eslint-disable max-params */
// @ts-check
/**
 * @param {string} newName
 * @param {string} fileName
 * @param {string | string[]} outputFileNames
 */
function incrementDuplicateFileCount(newName, fileName, outputFileNames) {
    let checker = true;
    while (checker) {
        const extractNumber = /.*?\((\d)\)/;
        const data = extractNumber.exec(newName);
        let nextFileName = Number(data[1]);
        nextFileName++;
        newName = `${fileName}(${nextFileName})`;
        checker = outputFileNames.includes(newName);
    }

    return newName;
}

/**
 * @param {string} fileName
 * @param {string | string[]} outputFileNames
 */
function updateDuplicateFile(fileName, outputFileNames) {
    let newName = `${fileName}(1)`;
    if (outputFileNames.includes(newName)) {
        newName = incrementDuplicateFileCount(newName, fileName, outputFileNames);
    }

    return newName;
}

/**
 * @param {string[]} fileNames
 */
function fileNaming(fileNames) {
    if (Array.isArray(fileNames)) {
        const outputFileNames = [];
        fileNames.forEach((fileName) => {
            if (outputFileNames.includes(fileName)) {
                fileName = updateDuplicateFile(fileName, outputFileNames);
            }
            outputFileNames.push(fileName);
        });

        return outputFileNames;
    }
    throw new Error(`Invalid Input`);
}

module.exports = { fileNaming };
