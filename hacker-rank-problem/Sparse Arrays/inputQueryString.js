function getInputString() {
    return ['aba', 'baba', 'aba', 'xzxb'];
}

function getQueryString() {
    return ['aba', 'xzxb', 'ab'];
}

function compute(inputString, queryString) {
    if (arguments.length === 0) {
        inputString = getInputString();
        queryString = getQueryString();
    }

    let stringCount = [];

    queryString.forEach((query) => {
        let count = 0;
        inputString.forEach((input) => {
            if (input === query) {
                count++;
            }
        });
        stringCount.push(count);
    });
    return stringCount;
}

test1InputString = ['aba', 'baba', 'aba', 'xzxb'];
test1QueryString = ['aba', 'xzxb', 'ab'];

console.log(compute(test1InputString, test1QueryString));

test2InputString = ['def', 'de', 'fgh'];
test2QueryString = ['de', 'lmn', 'fgh'];

console.log(compute(test2InputString, test2QueryString));

test3InputString = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf'];
test3QueryString = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn'];

console.log(compute(test3InputString, test3QueryString));
