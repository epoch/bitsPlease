console.log('one');
console.log('two');

var num1Input = document.querySelector('#num1-input');
var num2Input = document.querySelector('#num2-input');
var btn = document.querySelector('button');
var span = document.querySelector('span');

btn.addEventListener('click', function() {

  var num1 = Number(num1Input.value);
  var num2 = Number(num2Input.value);
  var result = num1 + num2;
  span.textContent = result;

});

