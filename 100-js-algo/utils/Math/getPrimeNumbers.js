function getPrimeNumbers(range) {
    if (typeof range === "number") {
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
    } else {
        throw new Error("Invalid Input");
    }
}

module.exports = { getPrimeNumbers };
