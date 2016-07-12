var express = require('express');
var app = express();

var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org');
 

client.on('connect', function () {
  client.subscribe('emdo/devices');
  console.log('Subcribed at: ' + 'emdo/devices');
});
 
app.get('/send_data', function (req, res) {


 var data = 
 //[
 {
  	 'uuid': (1111222233300 + Math.floor((Math.random() * 100))).toString() 
  , 'kw1' : (Math.random() * 10).toFixed(2).toString() 
  , 'kw2' : (Math.random() * 10).toFixed(2).toString() 
  };
 // ];
  
  //console.log('Sending data: ' + data);
  
  console.log('Sending data: ' + JSON.stringify(data));
  
  //MqttMessage message = new MqttMessage();
  //message.setPayload(data.getBytes());
  
  client.publish('emdo/devices', JSON.stringify(data));
  
  res.send('Sending data: ' + JSON.stringify(data));
  
});


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});