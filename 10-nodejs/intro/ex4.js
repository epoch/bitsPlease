// fs file system module/standard library/api

var fs = require('fs'); // fs is an object

var buffer = fs.readFileSync('ex1.js');

console.log( buffer.toString() );