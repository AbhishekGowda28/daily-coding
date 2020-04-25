function candies(children, numberOfCandies) {
    if (numberOfCandies < children || children === 0) {
        return 0;
    }

    return Number((numberOfCandies / children).toFixed(0));
}

module.exports = { candies };
