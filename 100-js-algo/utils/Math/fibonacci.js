// @ts-check

/**
 * @param {number} count
 */
function fibonacci(count) {
    let prev = 0, curr = 1, counter = 2;
    while (counter <= count) {
        const sum = prev + curr;
        prev = curr;
        curr = sum;
        counter++;
    }

    return curr;
}

console.log(fibonacci(102));

module.exports = fibonacci;
