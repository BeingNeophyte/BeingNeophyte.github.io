var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '610433',
  key: '48dea147161a3f599d6d',
  secret: '62f6664d19664773e8fc',
  cluster: 'ap2',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
});
