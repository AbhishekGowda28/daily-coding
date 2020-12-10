let properties = [];

function recordProperties(keys) {
    keys.forEach((key) => {
        if (properties.includes(key) === false) {
            properties.push(key);
        }
    });
}

function JSON2CSV(json) {
    const keys = Object.keys(json);
    recordProperties(keys);
    const values = Object.values(json);
    let keyStr = "";
    properties.forEach((key) => {
        keyStr += `${key}\t`;
    });
    keyStr += "\n";
    let valueStr = "";
    values.forEach((value) => {
        valueStr += `${JSON.stringify(value)}\t`;
    });
    valueStr += "\n";
    return `${keyStr}\n${valueStr}`;
}

const SAMPLE_JSON = {
    firstProperty: 1,
    name: "ABCD",
    age: "123",
    string: ["a", "w"],
    number: [1, 2, 4, 5],
    ppl: {
        name: "23",
        age: 23
    },
    date: new Date().toLocaleString()
};

console.log(JSON2CSV(SAMPLE_JSON));;