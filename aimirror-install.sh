#!/bin/bash

sudo apt-get update -y
sudo apt-get update -y
sudo apt-get --assume-yes install curl wget git build-essential unzip -y || exit
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
sudo apt-get install nodejs -y
git clone https://github.com/MichMich/MagicMirror.git AI-Mirror
cd AI-Mirror
npm install -y
cd
sudo mv /setupAIMirror/config.js /pi/AI-Mirror/config
sudo mv /setupAIMirror/asoundrc /pi
sudo apt-get install python3-dev python3-venv -y
python3 -m venv env
env/bin/python -m pip install --upgrade pip setuptools wheel
source env/bin/activate
sudo apt-get install portaudio19-dev libffi-dev libssl-dev libmpg123-dev -y
python -m pip install --upgrade google-assistant-library==1.0.1 -y
python -m pip install --upgrade google-assistant-sdk[samples]==0.5.1 -y
sudo apt-get install python-pip
pip freeze | grep RPi
sudo apt-get install python-dev python-rpi.gpio
pip install RPi.GPIO
sudo apt-get install picap -y
deactivate
sudo mv /setupAIMirror/autostart /etc/xdg/lxsession/LXDE-pi
sudo mv /setupAIMirror/hotword.py /pi/env/lib/python3.5/site-packages/googlesamples/assistant/library





