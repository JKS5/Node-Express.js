// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const { john, peter } = require("./4-names");
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");
// console.log(sayHi);
// console.log(name);

// console.log(data.singlePerson.name);
sayHi("susan");
// sayHi(john);
sayHi(names.john);
// sayHi(peter);
sayHi(names.peter);
