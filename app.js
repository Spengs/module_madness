var http = require('http');
var numbers = require('./numbers.js');
var convert = require('./numbers.js');
var balance = require('./numbers.js');


http.createServer(function (req, res){
  res.writeHead(200);

  res.write(numbers.balance());

  res.write(numbers.convert(numbers.randomNumber(100, 1000000)) + '\n');


  res.end();
}).listen(3000);
console.log('listening on port 3000');
