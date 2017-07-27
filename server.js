const http = require('http');
const express = require('express');
const app = express();
var port = process.env.PORT || 8080;
var Twilio = require('twilio')
const MessagingResponse = Twilio.twiml.MessagingResponse;

// Retreive Twilio Credentials
if (process.env.VCAP_SERVICES) {
    var env = JSON.parse(process.env.VCAP_SERVICES);
    var local_creds = env['user-provided'][0].credentials;
    var accountSid = local_creds.twilio_account_sid;
    var authToken = local_creds.twilio_auth_token;
    var outNumber = local_creds.twilio_phone_number;
} else {
    var outNumber = process.env.TWILIO_PHONE_NUMBER;
    var accountSid = process.env.TWILIO_ACCOUNT_SID;
    var authToken = process.env.TWILIO_AUTH_TOKEN;
}


var toNumber = process.env.OUTGOING_PHONE_NUMBER;

// Create a new Twilio REST client
const client = new Twilio(accountSid, authToken);

app.get("/", function (request, response) {
    response.end("You don't need to see my identification.");
});

app.get("/send-sms", function (request, response) {
    client.messages
    .create({
        to: toNumber,
        from: outNumber,
        body: 'Han shot first.',
    })
    .then((message) => {
        console.log(message.sid)
        response.end("Outgoing SMS!");
    })
    .catch((err) => {
        console.log(err);
        response.end("An error occurred!");
    });
});

app.post("/receive-sms", function (request, response) {
  const twiml = new MessagingResponse();
  twiml.message('Han shot first!!!');
  response.writeHead(200, {'Content-Type': 'text/xml'});
  response.end(twiml.toString());
});

app.listen(port);