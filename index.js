const express = require('express');
//const cors = require('cors');
var app = express();
var fs = require('fs');
//String dirname = 'var/www/html';
//app.use("/soccerimage/soccer.jpg",express.static("/soccerimage/soccer.jpg"));
app.get('/', function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-type': 'Text/html'});
    var myReadStream = fs.createReadStream('/var/www/html/boot.html');
    myReadStream.pipe(res);
});
app.get('/maradona', function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead
    var myReadStream = fs.createReadStream('/var/www/html/maradona.html');
    myReadStream.pipe(res);
});
app.get('/ronaldoluis', function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead
    var myReadStream = fs.createReadStream('/var/www/html/ronaldo.html');
    myReadStream.pipe(res);
});
app.get('/messi', function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead
    var myReadStream = fs.createReadStream('/var/www/html/messi.html');
    myReadStream.pipe(res);
});
app.listen(3000, () => console.log('Server running on port 3000'));
