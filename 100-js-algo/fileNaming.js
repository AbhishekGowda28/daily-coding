function fileNaming(fileNames) {
    if (Array.isArray(fileNames)) {
        const outputFileNames = [];
        fileNames.forEach((fileName) => {
            if (outputFileNames.includes(fileName) === false) {
                outputFileNames.push(fileName);
            } else {
                let newName = `${fileName}(1)`;
                if (outputFileNames.includes(newName) === false) {
                    outputFileNames.push(newName);
                } else {
                    let checker = true;
                    while (checker) {
                        const extractNumber = /.*?\((\d)\)/;
                        const data = extractNumber.exec(newName);
                        let nextFileName = Number(data[1]);
                        nextFileName++;
                        newName = `${fileName}(${nextFileName})`;
                        if (outputFileNames.includes(newName) === false) {
                            checker = false;
                        }
                    }
                    outputFileNames.push(newName);
                }
            }
        });

        return outputFileNames;
    }
    throw new Error("Invalid Input");
}

module.exports = { fileNaming };
