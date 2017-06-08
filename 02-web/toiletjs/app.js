var doSomething = function() {
  console.log('oops');
}


console.log('hey'); // sync
console.log('now'); // sync
setTimeout(doSomething, 5000); // async
console.log('you'); // sync


var poop = function() {
  document.body.style.backgroundColor = 'darkolivegreen';
}

var flush = function() {
  document.body.style.backgroundColor = 'mintcream'
}

var poopBtn = document.querySelector('#poopBtn');
var flushBtn = document.querySelector('#flushBtn');

poopBtn.addEventListener('click', poop);
flushBtn.addEventListener('click', flush);