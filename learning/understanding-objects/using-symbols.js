let nameProperty = Symbol("name");
let typeProperty = Symbol("type");

let object = {
    [nameProperty]: "name",
    [typeProperty]: "type"
}

console.log(object);

for(let property in object){
    console.log(property);
}
console.log("object.nameProperty", object[nameProperty])