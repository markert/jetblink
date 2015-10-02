'use strict';
var nopt = require('nopt');
var jet = require('node-jet');
var blinkapi = require('./blinkapi.js');
var exec = require('child_process').exec;

var knownOpts = {
  // port of jet daemon
  'port': Number,
  // address of jet daemon
  'addr': String,
};
var shortHands = {
  'p': ['--port'],
  'a': ['--addr']
};

var parsedArgs = nopt(knownOpts, shortHands, process.argv, 2);
var addr = parsedArgs.addr || '127.0.0.1';
var port = parsedArgs.port || 11123;

var peer = new jet.Peer({
  url: 'ws://' + addr + ':' + port
});

blinkapi.init(peer);
