// @ts-check

/**
 * @param {Set} setA
 * @param {Set} setB
 */
function Union(setA, setB) {
    const _unionSet = new Set(setA);
    setB.forEach(e => {
        _unionSet.add(e);
    });

    return _unionSet;
}

module.exports = Union;
