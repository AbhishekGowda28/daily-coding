function addTwoDigits(twoDigitNumber = 0) {
	return twoDigitNumber.toString().
		split("").reduce((sum, current) => {
			return sum += Number(current);
		}, 0);
}

module.exports = { addTwoDigits };
