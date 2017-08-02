function getFavColorAndLeastFavColor() {
  return ['pink', 'red'];
}

var [favColor, leastFavColor] = getFavColorAndLeastFavColor();
// ruby
// favColor, leastFavColor = getFavColorAndLeastFavColor()

console.log(leastFavColor);

function getPerson() {
  return {
    codeName: 'bitsPlease',
    classNumber: 12
  }
}


var { codeName: code } = getPerson();
console.log(code);