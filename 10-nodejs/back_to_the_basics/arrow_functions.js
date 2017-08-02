const languages = ['ruby','php','javascript'];

// new array of languages upcased
// ['RUBY','PHP','JAVASCRIPT']

var sayHi = function(firstname, lastname) {
  console.log(firstname + lastname);
}

// arrow functions
var sayHi = (firstname, lastname) => console.log(firstname + lastname);


var newLanguages = languages.map(lang => lang.toUpperCase());

console.log(newLanguages);