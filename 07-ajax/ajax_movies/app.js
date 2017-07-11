


var btn = document.querySelector('button');

btn.addEventListener('click', function(event) {

  event.preventDefault();

  console.log('search movie with ajax');

  var movieName = document.querySelector('input').value; 

  var settings = {
    url: 'http://omdbapi.com/',
    data: { 
      t: movieName, 
      apikey: '2f6435d9'
    }
  }

  // full url http://omdbapi.com/?t=sharknado&apikey=2f6435d9 

  var showMovie = function() {

  }

  $.ajax(settings).done(function(movie) { // response is json

    // console.log(response.Title);
    // document.querySelector('.response').innerHTML = response.Year
    var newParagraph = document.createElement('p');
    newParagraph.textContent = movie.Year
    document.querySelector('.response').appendChild( newParagraph );
  });

  console.log('after ajax function call');

});