'use strict';

var address = document.getElementById('address');
address.value = window.document.domain;
var port = document.getElementById('port');

var peer;

document.getElementById('connect').onclick = function () {
  peer = new jet.Peer({
    url: 'ws://' + address.value + ':' + parseInt(port.value)
  });

  var serialFetcher = new jet.Fetcher()
    .path('startsWith', '/blink/system/id')
    .on('data', function (params) {
      serial.innerHTML = 'Serial: ' + params.value + '<br>';
    });

  peer.fetch(serialFetcher);

  var lcomFetcher = new jet.Fetcher()
    .path('startsWith', '/blink/api/state')
    .on('data', function (params) {
      lcom.innerHTML = 'Last Command: ' + params.value + '<br>';
    });

  peer.fetch(lcomFetcher);
}

var serial = document.getElementById('serial');
var lcom = document.getElementById('lcom');
var led = document.getElementById('led');
var color = document.getElementById('color');
var glimmer = document.getElementById('glimmer');
var glimmert = document.getElementById('glimmert');
var blink = document.getElementById('blink');
var blinkt = document.getElementById('blinkt');
var fading = document.getElementById('fading');
var time = document.getElementById('time');
var fadingt = document.getElementById('fadingt');
var timet = document.getElementById('timet');

document.getElementById('set').onclick = function () {
  var blink = {};
  if (parseInt(glimmert.value) > 0 && glimmer.checked) {
    blink.glimmer = parseInt(glimmert.value);
  }
  if (parseInt(blinkt.value) > 0 && blink.checked) {
    blink.blink = parseInt(blinkt.value);
  }
  if (parseInt(led.value) === 1 || parseInt(led.value) === 2) {
    blink.led = parseInt(led.value);
  }
  if (parseInt(timet.value) > 0 && time.checked) {
    blink.time = parseInt(timet.value);
  }
  if (parseInt(fadingt.value) > 0 && fading.checked) {
    blink.fading = parseInt(fadingt.value);
  }
  blink.color = color.value;
  peer.call('/blink/api/color', blink);
};

var image = document.getElementById('mjpeg_dest');
var updateImage = function () {
  image.src = 'cam.jpg?time=' + new Date().getTime();
  setTimeout(window.requestAnimationFrame(updateImage), 40);
}

updateImage();
