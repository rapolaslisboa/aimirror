# AI Mirror

![alt text](https://i.imgur.com/CKaDBeJ.jpg)

AI Mirror is a project that uses the smart mirror technique and is based on the MagicMirror project to develop an interactive mirror with Google Assistant integration. The project was made by the students Rápolas Lisboa and Ricardo Zaponi. Further information about MagicMirror at https://magicmirror.builders/.

## Registering a device

* Visit https://console.actions.google.com/ and log in to your Google account.
* Click "ADD/IMPORT PROJECT".
* Choose a name for your project and click on "CREATE PROJECT".
* Click the "DEVICE REGISTRATION" tab at the bottom of the page.
* On the next page, select the REGISTER MODEL option..
* Enter the product name (you can put any), the name of the manufacturer (you can put any) and select Speaker as the device type.
* Your device is registered! Download the credentials of your device by clicking the Download OAuth 2.0 credentials.
* If you are using SSH and want to copy the credentials for Raspberry PI, use the command below:
```
scp ~/Downloads/client_secret_*.json <username>@<device-ip-address>:
</home/pi>

password: password-for-device
```
* Rename the credentials file to **credentials.json**.
* Click on the box "All 7 traits" and then on SAVE TRAITS.



## Activating API

* In order to enable the Google Assistant API, you need to access the following website https://ouo.io/VC4jBP 


## Installation

To install AI Mirror, first go to the directory **pi**.
``` 
cd /home/pi
```
Execute the following command on your Raspberry Pi to install AI Mirror:
``` 
bash -c "$(curl -sL https://raw.githubusercontent.com/rapolaslisboa/setupAIMirror/master/aimirror-install.sh)" 
```

## Activating token

In order to enable the token, take a look at the following:

``` 
source env/bin/activate
python -m pip install --upgrade google-auth-oauthlib[tool]
google-oauthlib-tool --client-secrets credentials.json --scope https://www.googleapis.com/auth/assistant-sdk-prototype --save --headless
sudo reboot
```

## Audio and speaker

**List devices**

List all soundcards and digital audio devices using the following commands:
``` 
arecord -l
aplay -l
``` 

**Audio and speaker test**

To test the speaker and microphone, use the commands below:
``` 
speaker-test -t wav
arecord --format=S16_LE --duration=5 --rate=16000 --file-type=raw out.raw
aplay --format=S16_LE --rate=16000 out.raw
```
If you need to change the ports of the audio devices, access the .asoundrc file and change them.
``` 
cd /home/pi
nano .asoundrc
```

## Modules

Find 3rd party modules to implement in your project at https://github.com/MichMich/MagicMirror/wiki/3rd-party-modules









