// write a command line program to count the number of lines in a file

// node ex5.js ex4.js
// 7

var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2])

var lines = buffer.toString().split('\n').length
console.log(lines);