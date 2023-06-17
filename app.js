// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const { john, peter } = require("./4-names");
// const names = require("./4-names");
const sayHi = require("./5-utils");

// console.log(sayHi);
// console.log(name);

sayHi("susan");
sayHi(john);
// sayHi(names.john);
sayHi(peter);
// sayHi(names.peter);
