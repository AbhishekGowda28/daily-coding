function getPrimeNumbers(startRange, endRange) {
    if ((typeof endRange === "number" || typeof startRange === "number") && startRange > 1) {
        const numbers = [];
        for (let index = startRange; index <= endRange; index++) {
            numbers[index] = true;
        }
        for (let count = 2; count <= endRange;) {
            let nextFactor = count * count;
            while (nextFactor <= endRange) {
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
