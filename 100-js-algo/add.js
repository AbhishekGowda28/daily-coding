function add() {
	let argumentsLength = arguments.length;
	let sum = 0;
	while (argumentsLength > 0) {
		sum += arguments[--argumentsLength];
	}
	
	return sum;
}

function addWithSpreadOperator(...params) {
	let sum = 0;
	params.forEach(element => {
		sum += element;
	});
	
	return sum;
}

add();
addWithSpreadOperator();
add(4);
addWithSpreadOperator(4);
add(15, 32);
addWithSpreadOperator(15, 32);
add(1, 3, 15, 8);
addWithSpreadOperator(1, 3, 15, 8);
