

// write a function that takes 3 parameters
// greeting, firstname, lastname
// set the default values to 'hello', your first and last name
// if no input is provided


function greeting(greeting = 'hello', firstname = 'd', lastname = 't') {
  // if (greeting === undefined) {
  //   greeting = 'hello';
  // }
  return greeting + ' ' + firstname + ' ' + lastname
}

var greeting = greeting(undefined, 'bits', 'please'); // 'hi bits please'
console.log(greeting);

//

function greeting(options = { firstname: 'd' }) {
  return options.greeting + ' ' + options.firstname + ' ' + options.lastname
}

greeting({ firstname: 'bits' });


