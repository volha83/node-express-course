const names = require("./04-names");
console.log(names.volha);
console.log(names.padlipskaya);

const myFunction = require("./05-utils");

const data = require("./06-alternative-flavor");

require("./07-mind-grenade");

myFunction(names.volha);
myFunction(names.padlipskaya);

console.log("Data from 06-alterntive-flavor:", data);
