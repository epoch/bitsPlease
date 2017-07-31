// write a command line program that sums numbers

// $ node ex3.js 1 2 3
// $ 6

var total = 0;

// todo

for (var i = 2; i < process.argv.length; i++) {
  total += Number(process.argv[i]);
}

console.log(total);


