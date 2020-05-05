// eslint-disable-next-line max-params
function applesDistribution(numberOfApples, boxCapacity, maxResidue) {
    let residue = numberOfApples % boxCapacity;
    while (residue > maxResidue) {
        boxCapacity--;
        residue = numberOfApples % boxCapacity;
    }

    return boxCapacity;
}

module.exports = { applesDistribution };
