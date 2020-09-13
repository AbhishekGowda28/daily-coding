const file_module = require("fs");
const file_name = "./someTHing.json";
const dataRead = [1, 12, 9];

function createFile(path) {
    file_module.writeFile(path, JSON.stringify({ data: "SourceMap", fadfadf: "otherthiungs" }, undefined, 2), (err, _) => {
        console.log(err, _)
        dataRead.push(4);
    });
}

function readData(path) {
    Object.assign(dataRead, file_module.readFile(path, { encoding: "utf-8" }, () => {
        dataRead.sort((a, b) => { return a - b });
        console.log();
    }));
}

createFile(file_name);
readData(file_name);
