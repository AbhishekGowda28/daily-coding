let Song = {
    name: "new-song",
    year: 2020
};


function getMeThis() {
    return this;
}

console.log(getMeThis.bind(Song)());

function newMethodWithArguments(value = 0) {
    return this.year + value;
}

console.log(newMethodWithArguments.bind(Song)());