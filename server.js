
//Dependencies//

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var request = require('request');

var twilio = require('twilio');

var accountSid = 'ACd950127f41333ba38b210a17d6723211'; 
var authToken = 'b6a6446bd33956728814f246c9207f8e'; 

//require the Twilio module and create a REST client 
var client = twilio(accountSid, authToken);


var app = express();

var port = 4000;

var message = {
	"message": "hello world"
};

//Middleware


/*client.messages.create({ 
	to: "+18018364139", 
	from: "+13852194722", 
	body: "what up bert",   
}, function(err, message) { 
	console.log(message.sid); 
});

app.use(twilio());*/

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
	console.log(req.body.message);
	//request.post('https://' + accountSid + ':' + authToken + '@api.twilio.com/2010-04-01/Accounts/')
	client.messages.create({ 
	to: "8018364139", 
	from: "+13852194722", 
	body: "what up bert",   
}, function(err, message) { 
	console.log(message.sid); 
});


});

app.listen(port, function(){
 console.log('Im watching you port 4000')
});

//app.listen(process.env.PORT, process.env.IP);
//console.log('powering on');

