# twilio-ibm-cloud-sms-quickstart
Send and Receive SMS and MMS Messages with IBM Cloud and Twilio

## Usage

1. In IBM Cloud, set up a new Twilio SMS service.
2. Enter your Account SID and Auth Token from the Console along with a Twilio number with SMS capabilities.
3. Clone this repository
4. Login to Cloud (ensure you have the [CLI installed](https://console.bluemix.net/docs/starters/install_cli.html)):
```
bluemix api https://api.ng.bluemix.net
bluemix login
```
5. Set this environment variables (in the IBM Cloud console):
```
OUTGOING_PHONE_NUMBER
```
6. Deploy the code:
```
bluemix app push APP_NAME
```
7. In the Twilio console, add a webhook to <URL of Cloud App>/receive-sms
8. Visit <URL of Cloud App>/send-sms
9. Send a snarky response
10. Receive an even snarkier retort

## Meta & Licensing

* Lovingly crafted by [Twilio Developer Education](https://www.twilio.com/docs)
* MIT License
