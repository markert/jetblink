## blink(1) mk2 jet adapter

This node.js library links the blink(1) mk2 to a websocket based, multi-client capable IPC mechanism called [jet](http://www.jetbus.io).

Use it to achieve any functionality you desire with the blink(1) mk2. It is easy controllable and websocket based. Clients can be either programs running in the RPi or browsers and services on other machines. I provide an RC-car example use case.

The implementation works on a Raspberry PI but can easily be updated to work on MAC or Windows.

### Setup

- Install [blink(1) mk2](https://github.com/todbot/blink1) console application on you RPi.
- Install the newest node.js version on your RPi
- checkout [jetblink](https://github.com/markert/jetblink)
- type `npm install` in the repository
- add `/usr/local/bin/node /home/pi/jetblink/src/daemon.js &` and `sudo /usr/local/bin/node /home/pi/jetblink/src/jetblink.js &` to /etc/rc.local or start as root from console
- open [demo](http://markert.github.io/jetblink/) and connect to your RPi IP address. The standard port is 11123
- control blink(1) mk2


### Media

The Media shows the really ugly control website for the [car](https://github.com/markert/jetblink/blob/master/media/picar.png) and the [car itself](https://github.com/markert/jetblink/blob/master/media/IMG_20151003_132251.jpg). 

There is one video showing the control of the [blink(1) mk2](https://github.com/markert/jetblink/blob/master/media/chrome.webm) over the website. The delay is mostly due to the 1080p camera delay of the RPi. Light changes instantly. It can also be controlled from several clients simultaneuously. 

There is another video showing my [PiCar](https://github.com/markert/jetblink/blob/master/media/VID_20151003_164806.mp4) using the blink(1) mk2. Color codes are as follows:

red: no client connected -> car stops

Light 1 (motor):
- green: stop
- yellow: backward (intenity equals PWM motor speed)
- blue: forward (intenity equals PWM motor speed)

Light 2 (steering):
- green: front
- yellow: left
- blue: right
