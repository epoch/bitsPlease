var request = require('request');
var _ = require('lodash');
var myLib = require('./myLib');

var arr = [2,3,4,5,6]

console.log(_.sample(arr))

var uri ='http://api.openweathermap.org/data/2.5/weather';

request({
  uri: uri,
  qs: { 
    q: 'mebourne,au',
    units: 'metric', 
    appid: process.env.OPEN_WEATHER_API_KEY 
  }
}, function(error, response, body) {

  var body = JSON.parse(body);
  console.log(body.main.temp);
});