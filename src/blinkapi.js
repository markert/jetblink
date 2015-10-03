'use strict';

var jet = require('node-jet');

var exec = require('child_process').exec;

var external = {
  init: function (peer) {
    var states = {};
    states.blink = {};
    states.blink.system = {};
    states.blink.api = {};
    var sn = 'x';
    exec('blink1-tool --on');
    states.blink.api.state = new jet.State('/blink/api/state', 'blink1-tool --on');
    states.blink.api.state.on('set', function (param) {});
    peer.add(states.blink.api.state);
    exec('blink1-tool --list', function (e, o) {
      sn = o.split(':').pop();
      states.blink.system.id = new jet.State('/blink/system/id', sn);
      peer.add(states.blink.system.id);
      console.log(states.blink.system.id.value());
    });
    states.blink.api.color = new jet.Method('/blink/api/color');
    states.blink.api.color.on('call', function (params) {
      console.log(params);
      var args = '';
      if (params.led) {
        args += '-l ' + params.led + ' ';
      }
      if (params.color) {
        args += '--rgb ' + params.color + ' '
      }
      if (params.blink) {
        args += '--blink ' + params.blink + ' ';
      }
      if (params.glimmer) {
        args += '--glimmer=' + params.glimmer + ' '
      }
      if (params.fading) {
        args += '-m ' + params.fading + ' '
      }
      if (params.time) {
        args += '-t ' + params.time + ' '
      }
      var cmd = 'blink1-tool ' + args;
      exec(cmd);
      peer.set('/blink/api/state', cmd);
      console.log(cmd);
    });
    peer.add(states.blink.api.color);
  }
}

module.exports = external;
