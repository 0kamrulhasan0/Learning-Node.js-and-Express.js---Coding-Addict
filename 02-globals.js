/*
ONLY GLOBALS - NO WINDOW
__dirname - current dir
__filename - file name
require - function to use modules
module - info about the current module
process - info abou env where the process is executing.
console - the console
setTimeout	- executes t ms time after
setInterval 	- executes in every t ms
*/


console.log(__dirname)
setInterval(() => {
  console.log("hello");
}, 1000)
