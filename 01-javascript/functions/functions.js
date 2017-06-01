
// function expression
var doubleMe = function(number) {
  return number + number;
}

console.log( doubleMe(5, 6) );

// function declaration
// function doubleMe(number) {
//   return number + number
// }

var calmYourself = function(stuff) {
  return stuff.toLowerCase().split('!')[0];
}

calmYourself('NOOOOO!'); // nooooo

var launchMissile = function() {
  var numberOfMissiles = 3;

  console.log(numberOfMissiles + ' missiles launched');
  console.log('missed all targets');
}