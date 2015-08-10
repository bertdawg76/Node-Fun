
//Dependencies//

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var request = require('request');

var twilio = require('twilio');

var app = express();

var port = 4000;

var message = {
	"message": "hello world"
};

//Middleware

app.use(express.static('public'));

//app.use(bodyParser());

app.use(cors());

//for deprecated error, if not use app.use(bodyParser());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

//endpoints

app.get('/api/message', function(req, res) {
	return res.json(message);

	
});

app.post('/api/send_text_message', function(req, res){
	console.log(req.body);
	res.send();
})

app.listen(port, function(){
 console.log('Im watching you port 4000')
});

//app.listen(process.env.PORT, process.env.IP);
//console.log('powering on');

