// @ts-check

/**
 * @param {string[]} fileNames
 */
function fileNaming(fileNames) {
    if (Array.isArray(fileNames)) {
        const outputFileNames = [];
        for (let fileCounter = 0; fileCounter < fileNames.length; fileCounter++) {
            const fileName = fileNames[fileCounter];
            if (outputFileNames.includes(fileName) === false) {
                outputFileNames.push(fileName);
            } else {
                const newName = `${fileName}(1)`;
                if (outputFileNames.includes(newName) === false) {
                    outputFileNames.push(newName);
                } else {
                    const extractNumber = /.*?\((\d)\)/;
                    const data = extractNumber.exec(newName);
                    if (data !== null) {
                        let nextFileName = Number(data[1]);
                        nextFileName++;
                        outputFileNames.push(`${fileName}(${nextFileName})`)
                    }
                }
            }
        }
    } else {
        throw new Error("Invalid Input");
    }
}

fileNaming(["doc", "doc", "image", "doc(1)", "doc"]);

module.exports = { fileNaming };
