# AI Mirror

![alt text](https://i.imgur.com/CKaDBeJ.jpg)

AI Mirror is a project that uses the smart mirror technique and is based on the MagicMirror project to develop an interactive mirror with Google Assistant integration. The project was made by the students Rápolas Lisboa and Ricardo Zaponi.

## Registering a device

* Acesse o site https://console.actions.google.com/ e logue na sua conta do Google.
* Clique em "ADD/IMPORT PROJECT".
* Escolha um nome para seu projeto e clique em "CREATE PROJECT".
* Clique na aba "DEVICE REGISTRATION" na parte inferior da página.
* Você será redirecionado para a seguinte página. Nesta página, selecione a opção REGISTER MODEL.
* Digite o nome do produto (você pode por qualquer um), o nome do manufaturador (você pode por qualquer um) e selecione Speaker como tipo de dispositivo.
* Seu modelo está registrado! Baixe as credenciais do seu modelo clicando na opção Download OAuth 2.0 credentials.
* Caso esteja utilizando SSH e queira copiar as credenciais para o Raspberry PI, utilize o comando abaixo:
```
scp ~/Downloads/client_secret_*.json <username>@<device-ip-address>:
</home/pi>

password: password-for-device
```
* Renomeie o arquivo das credenciais para **credentials.json**.
* Clique na caixinha “All 7 traits” e logo em SAVE TRAITS.



## Activating API

* Para habilitar a API da Google Asisstant, será necessário acessar o seguinte site https://ouo.io/VC4jBP 


## Installation

Para a instalação do AI Mirror, primeiramente acesse o diretório **pi**.
``` 
cd /home/pi
```
Execute the following command on your Raspberry Pi to install AI Mirror:
``` 
bash -c "$(curl -sL https://raw.githubusercontent.com/rapolaslisboa/setupAIMirror/master/aimirror-install.sh)" 
```

## Activating token

Para ativar o token, siga os comandos abaixo:

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

Para testar o alto-falante e o microfone, utilize os comandos abaixo:
``` 
speaker-test -t wav
arecord --format=S16_LE --duration=5 --rate=16000 --file-type=raw out.raw
aplay --format=S16_LE --rate=16000 out.raw
```
Caso necessite alterar as portas dos dispositivos de áudio, acesse o arquivo .asoundrc e os altere.
``` 
cd /home/pi
nano .asoundrc
```

## Complements

Encontre mais módulos, desenvolvimento e comunidade de smart mirrors em https://magicmirror.builders/









