function getPrimeNumbers(range) {
    const numbers = Array(range + 1).fill(true);
    numbers[0] = false;
    numbers[1] = false;
    for (let count = 2; count <= range;) {
        let nextFactor = count * count;
        while (nextFactor <= range) {
            if (numbers[nextFactor] === true) {
                numbers[nextFactor] = false;
            }
            nextFactor += count;
        }
        count++;
        while (numbers[count] === false) {
            count++;
        }
    }
    const primes = [];
    numbers.forEach((isPrime, index) => {
        if (isPrime === true) {
            primes.push(index);
        }
    });
    
return primes;
}

module.exports = { getPrimeNumbers };
