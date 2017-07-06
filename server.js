const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const app = express();
var port = process.env.PORT || 8080;

// Retreive Twilio Credentials
if (process.env.VCAP_SERVICES) {
    var env = JSON.parse(process.env.VCAP_SERVICES);
    var local_creds = env['user-provided'][0].credentials;
    var accountSid = local_creds.accountSID;
    var authToken = local_creds.authToken;
} else {
    var accountSid = process.env.TWILIO_ACCOUNT_SID;
    var authToken = process.env.TWILIO_AUTH_TOKEN;
}

var outNumber = process.env.TWILIO_PHONE_NUMBER;
var toNumber = process.env.TWILIO_OUTGOING_PHONE_NUMBER;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

app.get("/s", function (request, response) {
    response.end("You don't need to see my identification.");
});

app.get("/send-sms", function (request, response) {
    client.messages
    .create({
        to: toNumber,
        from: outNumber,
        body: 'Han shot first.',
    })
    .then((message) => console.log(message.sid));
    response.end("Outgoing SMS!");
});

app.post('/receive-sms', (req, res) => {
  const twiml = new MessagingResponse();
  twiml.message('Han shot first!!!');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

app.listen(port);