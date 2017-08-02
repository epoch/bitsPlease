var app = require('express')();
const PORT = 5000;

app.set('views', './views');
app.set('view engine', 'ejs');

// request
//   ||
//   ||
app.get('/', function(req, res) {
  res.render('index');
});
//   ||
app.get('/details', function(req, res) {

  request({
    uri: 'http://www.omdbapi.com',
    qs: { 
      t: req.query.title,
      apikey: process.env.OMDB_API_KEY 
    } // params[:title]
  }, function(err, apiResponse, body) {
    var movie = JSON.parse(body);
    res.render('details', { title: movie.Title })
  });

})
//   ||
//   \/
app.get('/about', function(req, res) {
  res.render('about')
})

app.listen(PORT, function() {
  console.log('listening on port ' + PORT);
});

