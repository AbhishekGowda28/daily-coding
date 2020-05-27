const arrowFunction = (value) => {
    console.log(value);
    console.log(this);
}

const anonymousFunction = function() {
    console.log(arguments);
}

const array = [1, 2, 3, 4, 5];

array.forEach(arrowFunction);

array.forEach(anonymousFunction);

console.log(this);

function f(a, b = () => console.log(a)) {
    var a = 1;
    b() // Prints `undefined`, because default parameter values exist in their own scope
  } 

  f();