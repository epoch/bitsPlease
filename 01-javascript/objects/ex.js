console.log('objects homework');

var recipe = {
  name: 'pancake',
  servings: 6,
  ingredients: ['self raising flour','sugar', 'salt', 'milk', 'eggs']
}

console.log('name: ' + recipe.name);
console.log(recipe.ingredients.toString())
console.log(recipe.ingredients.join('\n'))

var book = {
  title: 'cooking for dummies',
  author: 'unknown',
  alreadyRead: true
}

var book2 = {
  title: '1984',
  author: 'George Orwell',
  alreadyRead: false
}

var books = [{
  title: 'cooking for dummies',
  author: 'unknown',
  alreadyRead: true
}, {
  title: '1984',
  author: 'George Orwell',
  alreadyRead: false
}]

for (var index = 0; index < books.length; index++) {
  var currBook = books[index];

  if (currBook.alreadyRead) {
    console.log('already read ' + currBook.title + ' by ' + currBook.author);
  } else {
    console.log('you should read ' + currBook.title);
  }

}

// movie database

var movie = {
  title: 'sharknado',
  duration: '90min',
  stars: ['sharks', 'tornadoes', 'magic johnson']
}

var describeMovie = function(movie) {
  return movie.title + ' last for ' + movie.duration + ' stars ' + movie.stars.join(', ')
}

// var result = describeMovie(movie);
console.log( describeMovie(movie) );
