console.log('hello wdi12');

if (5 > 4) {
  console.log('math is easy');
}

var wdi12isAwesome = true; // global variable

// scope

if (wdi12isAwesome) {
  console.log('wdi12 rocks!');
}

// truthy and falsey
// values that are falsey - false, empty string, the number 0, undefined, null, NaN
var name = '';
if (name) {
  console.log('Hello ' + name);
}

var points = 0;
if (points) {
  console.log('you have ' + points + ' points')
}

var firstname;
if (firstname) {
  console.log('your name is ' + firstname);
}