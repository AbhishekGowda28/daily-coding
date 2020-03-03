function summation(array, element) {
	let sum = 0;
	array.forEach((e) => {
		sum += Math.abs(e - element);
	});

	return sum;
}

function absoluteValuesSumMinization(arr) {
	let smallest = summation(arr, arr[0]);
	smallest;
	let returnValue = arr[0];
	arr.forEach(ele => {
		const temp = summation(arr, ele);
		if (temp < smallest) {
			smallest = temp;
			returnValue = ele;
		}
		smallest;
	});
	returnValue;

	return returnValue;
}

function median(array) {
	array.sort((a, b) => {
		return a - b;
	});
	const evenArray = array.length % 2;

	return evenArray === 0 ?
		array[Math.floor(array.length / 2) - 1] :
		array[Math.floor(array.length / 2)];
}

module.exports = {
	median,
	absoluteValuesSumMinization
};
