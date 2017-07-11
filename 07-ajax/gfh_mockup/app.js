// document.querySelector('.count').innerHTML = 'hello';

// find the elem
var updateCount = function(event) {

  // target we want is the closest elem with .count
  var uiCard = event.target.closest('.ui-card')
  var countSpan = uiCard.querySelector('.count');
  countSpan.textContent = parseInt(countSpan.textContent) + 1;

}

document.querySelector('.container').addEventListener('click', function(event) {

  if (event.target.className === 'star') {
    updateCount(event);
  }

});

document.querySelector('#test').addEventListener('click', function() {
  console.log('sdfsfdsf')
})

// var stars = document.querySelectorAll('.star');

// document.querySelector('.star').addEventListener('click', updateCount);
