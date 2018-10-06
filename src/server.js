var express = require('express');
var bodyParser = require('body-parser');
var Pusher = require('pusher');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var pusher = new Pusher({ appId: '610433', key: '48dea147161a3f599d6d', secret: '62f6664d19664773e8fc', cluster: 'ap2' });

app.post('/message', function(req, res) {
  var message = req.body.message;
  pusher.trigger( 'public-chat', 'message-added', { 'message': message });
  res.sendStatus(200);
});

app.get('/',function(req,res){      
     res.sendFile('/public/index.html', {root: 'https://neophyte.cf/src' });
});

app.use(express.static('https://neophyte.cf/src' + '/public'));

var port = process.env.PORT || 80;
app.listen(port, function () {
  console.log(`app listening on port ${port}!`)
});
