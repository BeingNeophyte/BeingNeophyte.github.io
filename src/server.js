var express = require('express');
var bodyParser = require('body-parser');
var Pusher = require('pusher');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var pusher = new Pusher({ appId: "610429", key: '79530d022fb171a3424f', secret: 'ccd964ce00d1d6c1430e', cluster: 'ap2' });

app.post('/message', function(req, res) {
  var message = req.body.message;
  pusher.trigger( 'my-channel', 'my-event', { message: message });
  res.sendStatus(200);
});

app.get('/',function(req,res){      
     res.sendFile('/public/index.html', {root: __dirname });
});

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`app listening on port ${port}!`)
});
