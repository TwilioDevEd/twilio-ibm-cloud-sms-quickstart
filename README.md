# twilio-bluemix-sms-quickstart
Send and Receive SMS and MMS Messages with IBM's Bluemix and Twilio

## Usage

1. In IBM's Bluemix, set up a new Twilio service.
2. Enter your Account SID and Auth Token from the Console
3. Clone this repository
4. Login to Bluemix (ensure you have the [CLI installed](https://console.bluemix.net/docs/starters/install_cli.html)):
```
bluemix api https://api.ng.bluemix.net
bluemix login
```
5. Set the environment variables (in the Bluemix console):
```
TWILIO_PHONE_NUMBER
TWILIO_OUTGOING_PHONE_NUMBER
```
6. Deploy the code:
```
bluemix app push
```
7. In the Twilio console, add a webhook to <URL of Bluemix App>/receive-sms
8. Visit <URL of Bluemix App>/send-sms
9. Send a snarky reponse
10. Receive an even snarkier retort

## Meta & Licensing

* Lovingly crafted by [Twilio Developer Education](https://www.twilio.com/docs)
* MIT License
