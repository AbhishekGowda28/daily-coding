// What is an object
/**
 * Object is anything that holds value
 */


/**
 * 2 Objects even if they have same data are not equal
 */

/**
 * Creation of Object
 */

var planet = {
    name: "Earth-1"
};

var planet_created_with_Object_constructor = new Object({ name: "Earth-1" });

// var new_planet = Object.create({ name: "new-Earth" })
var new_planet = Object.create(planet)

console.log("planet", planet)
console.log("planet_created_with_Object_constructor", planet_created_with_Object_constructor)
console.log("new_planet", new_planet.name)

planet.getName = (properties) => {
    console.log(properties.name);
}

console.log(planet.getName(planet))
// console.log(global)

let someName = "Abc";
let arr = [planet];
console.log(arr);
someName = undefined
console.log(arr);
console.log(Object.is(planet, arr[0]));

console.log(+0 === -0)
console.log(Object.is(-0, 0))

