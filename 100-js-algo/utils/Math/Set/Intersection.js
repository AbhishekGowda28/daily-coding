// @ts-check

/**
 * @param {Set} setA
 * @param {Set} setB
 */
function Intersection(setA, setB) {
    const _intersectonSet = new Set();
    setB.forEach((element) => {
        if (setA.has(element)) {
            _intersectonSet.add(element);
        }
    });

    return _intersectonSet;
}

module.exports = Intersection;
