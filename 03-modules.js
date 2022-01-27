// Modules: every file in node is module

const names = require('./04-name.js');
const sayHi = require('./05-utils.js');
const data = require('./06-alternative-module.js');

//while importing module, the code inside the module
//also gets executed. that's why without doing
//anything except importing the file, the code gets
//exectued
require('./01-intro.js')

console.log(names);
console.log(sayHi);
console.log(data)

sayHi(names.john)
sayHi(names.pk)
