var express = require('express');
var app = express();

var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org');
 

client.on('connect', function () {
  client.subscribe('emdo/devices');
  console.log('Subcribed at: ' + 'emdo/devices');
});
 
app.get('/send_data', function (req, res) {

  client.publish('emdo/devices', 'Hello, I am the client');
  res.send('Sending data!');
   console.log('Sending data!');
});


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});