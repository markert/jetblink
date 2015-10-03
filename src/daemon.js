#!/usr/bin/env node

var jet = require('node-jet');

var daemon = new jet.Daemon();

daemon.listen({
  tcpPort: 11122,
  wsPort: 11123
});

daemon.on('connection', function (p) {
  console.log(new Date() + ' connect ' + p.id);
});

daemon.on('disconnect', function (p) {
  console.log(new Date() + ' disconnect ' + p.id);
});
