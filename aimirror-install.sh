#!/bin/bash

sudo apt-get update -y
sudo apt-get update -y
sudo apt-get --assume-yes install curl wget git build-essential unzip -y || exit
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
sudo apt-get install nodejs -y
cd
git clone https://github.com/MichMich/MagicMirror.git AI-Mirror
cd AI-Mirror
npm install -y
cd
sudo mv /home/pi/setupAIMirror/config.js /home/pi/AI-Mirror/config
sudo mv /home/pi/setupAIMirror/asoundrc /home/pi
sudo apt-get install python3-dev python3-venv -y
echo "Inicio installation do Google Samples mais o ambiente virtual do Python" 
python3 -m venv env
echo "Passou do python3 -m venv env" 
env/bin/python -m pip install --upgrade pip setuptools wheel
source env/bin/activate
sudo apt-get install portaudio19-dev libffi-dev libssl-dev libmpg123-dev
echo "Passo 1"
python -m pip install --upgrade google-assistant-library==1.0.1
echo "Passo 2"
python -m pip install --upgrade google-assistant-sdk[samples]==0.5.1
echo "Passo 3"
sudo apt-get install python-pip
echo "Passo do pip"
pip freeze | grep RPi
sudo apt-get install python-dev python-rpi.gpio
pip install RPi.GPIO
sudo apt-get install picap -y
deactivate
sudo mv /home/pi/setupAIMirror/autostart /etc/xdg/lxsession/LXDE-pi
sudo mv /home/pi/setupAIMirror/hotword.py /home/pi/env/lib/python3.5/site-packages/googlesamples/assistant/library
sudo rm -r setupAIMirror





