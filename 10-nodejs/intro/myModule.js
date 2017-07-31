var secretColor = 'mistyrose';

var myFavColor = function() {
  return secretColor;
}

var secondFavColor = function() {
  return 'pink'
}

module.exports = {
  myFavColor: myFavColor,
  secondFavColor: secondFavColor
};