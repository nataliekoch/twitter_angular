var express = require('express');
var app = express();
var path = require('path')
var noun = require('../public/data/noun');
var adjective = require('../public/data/adjectives');

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

app.get('/generate', function(req, res){
  var genHandlers = randomHandler();
  res.send(genHandlers);
});

app.listen(5000, function(){
  console.log('listening on port: 5000');
});

function randomHandler(){
  var handlerArray = [];
  for(var i = 0; i < noun.noun.length - 1; i++){
    var pickNoun = randomNumber(0, noun.noun.length - 1);
    var pickAdjectives = randomNumber(0, adjective.adjective.length - 1);
    handlerArray.push(adjective.adjective[pickAdjectives] + noun.noun[pickNoun]);
    }
  console.log(handlerArray);
  return handlerArray;
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
