function alternatingSums(weights) {
    let oddSum = 0, evenSum = 0;
    weights.forEach((weight, index) => {
        if (index % 2 === 0) {
            oddSum += weight;
        } else {
            evenSum += weight;
        }
    });
    return [oddSum, evenSum];
}

module.exports = { alternatingSums };
