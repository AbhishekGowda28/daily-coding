// Creating a Symbol variable

let new_symbol = Symbol("new");

console.log(new_symbol)

// Not Symbol object should is not created with new keyword.
// As there is no constructor to this object

// let symbol_with_new_keyword = new Symbol() ## This throws error

/**
 * 
 *  What is a Symbol?
 *  A symbol is a type in Javascript.
 *  Symbol method creates a unique identifier each time it's invoked.
 *  No two symbols are equal
 * 
 * 
 */



const song_object = {
    name: "Song_Name",
    gener: "Classical",
    [new_symbol]: "Symbol--value"
};

console.log(song_object)

console.log("description", new_symbol.description)

console.log("description", new_symbol.description)

for (const property in song_object) {
    console.log(property, song_object[property]);
}

const hidden_properties = Object.getOwnPropertySymbols(song_object);

let symbol_property;

hidden_properties.forEach((value) => {
    // Reteriving value of hidden objects
    console.log(song_object[value])
    symbol_property = value;
});

// delete song_object[property]

console.log(song_object)

const song_list = ["song1", "song2"];

console.log(song_list[Symbol.iterator])

const _property_value = Symbol.for("new_symbol");
console.log(symbol_property, _property_value)
console.log(song_object[_property_value], song_object[symbol_property])

// To get the global Symbol
console.log(Symbol.keyFor(_property_value))

// This Symbol is not present in the global Symbol registry
console.log(Symbol.keyFor(symbol_property)) 


console.log(Reflect.ownKeys(song_object))