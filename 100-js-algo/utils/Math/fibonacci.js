// @ts-check

/**
 * @param {number} expectedFibonacciCount
 */
function fibonacci(expectedFibonacciCount) {
    const fib = [1];
    if (expectedFibonacciCount === 0) {
        return [];
    }
    if (expectedFibonacciCount === 1) {
        return [1];
    }
    let prev = 0, curr = 1, counter = 2;
    while (counter <= expectedFibonacciCount) {
        const sum = prev + curr;
        prev = curr;
        curr = sum;
        counter++;
        fib.push(curr);
    }

    return fib;
}

module.exports = fibonacci;
