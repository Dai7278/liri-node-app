// code you need to grab the data from keys.js
var keys = require('./keys');
var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs = require('fs');

var user = new twitter({
  consumer_key: 'uM3sa57r4dT69dPFpqek9RJD4',
  consumer_secret: '5xruMh7mxEfkJEzypDANIilbf3MoomF9R63O8VAyHLGyzEPAFF',
  access_token_key: '	852221137241202688-aw6F9rMXDRkDXCBQ7Ck4iKwiAoEyv8u',
  acces_token_secret: 'UFe51jYbYcsijZlo7kyGtCrLRSaWySURUhlqwtxqg323X',
})

function tweets(){
var params = {
    screen_name: 'Dereckit83'
} && {
    count: 20
}
