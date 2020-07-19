function fileNaming(fileNames) {
    if (Array.isArray(fileNames)) {
        const outputFileNames = [];
        fileNames.forEach((fileName) => {
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
                        console.log(data, nextFileName)
                        outputFileNames.push(`${fileName}(${nextFileName})`);
                    }
                }
            }
        });

        return outputFileNames;
    } else {
        throw new Error("Invalid Input");
    }
}

module.exports = { fileNaming };
