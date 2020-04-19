function add() {
	let argumentsLength = arguments.length;
	let sum = 0;
	while (argumentsLength > 0) {
		sum += arguments[--argumentsLength];
	}

	// sum was returned as string
	return Number(sum);
}

function addWithSpreadOperator(...params) {
	let sum = 0;
	params.forEach(element => {
		sum += element;
	});

	return Number(sum);
}

module.exports = {
	add,
	addWithSpreadOperator
};
