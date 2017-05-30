console.log('ready loopy');

// var count = 1;

// while (count <= 20) {
//   console.log(count);
//   count = count + 1;
// }

// for (var count = 1; count <= 20; count++) {
//   if (count % 3 === 0) {
//     console.log('cake');
//   } else {
//     // print the number
//     console.log(count);
//   }
// }

// console.log('the end');


// for (var num = 1; num <= 20; num++) {
//   if (num === 3) {
//     console.log('cake')
//   } else {
//     console.log(num);
//   }
// }

var secretNumber = 42;
var guess; = Number(prompt('guess a number'));

console.log('secretNumber', secretNumber);
console.log('guess', guess);


while (secretNumber !== guess) {

  // if (guess > secretNumber) {
  //   console.log('guess lower');
  // } else {
  //   console.log('guess higher');
  // }

  guess = Number(prompt('guess again'));

}

console.log('you are doing ok');

// while (true) {
//   if () {
//     break;
//   }
// }

// if (secretNumber === 42) { // block
//   console.log('within if statement')
// }

// var guess = prompt('Enter a number');

// 1. allow the user to make a guess until they guessed it right

// 2. give the user hints if they should guess higher or lower
