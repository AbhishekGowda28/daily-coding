var outer_object = 5;

(function add(){
	let outer_object = 15;
	outer_object+=25;
	console.log(outer_object);
})();
console.log("outer_object", outer_object);
