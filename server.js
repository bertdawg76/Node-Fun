
//Dependencies//

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var port = 4000;


//app.listen(port, function(){
//	console.log('Im watching you port 4000')
//});

app.listen(process.env.PORT, process.env.IP);
console.log('powering on');

