## blink(1) mk2 jet adapter

This node.js library links the blink(1) mk2 to a websocket based, multi-client capable IPC mechanism called [jet](http://www.jetbus.io).

The implementation works on a Raspberry PI but can easily be updated to work on MAC or Windows.

### Setup

- Install [blink(1) mk2](https://github.com/todbot/blink1) console application on you RPi.
- Install the newest node.js version on your RPi
- checkout [jetblink](https://github.com/markert/jetblink)
- type `npm install` in the repository
- add `/usr/local/bin/node /home/pi/jetblink/src/daemon.js &` and `sudo /usr/local/bin/node /home/pi/jetblink/src/jetblink.js &` to /etc/rc.local or start as root from console
- open [demo](http://markert.github.io/jetblink/) and connect to your RPi IP address. The standard port is 11123
- control blink(1) mk2
