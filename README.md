# Taplytics Node SDK

Currently only supports [push notifications](https://rest-docs.taplytics.com/#push-notifications).

## Usage

```javascript
const Taplytics = require('taplytics-node');
const client = new Taplytics({
  api_token: 'API_TOKEN'
})


// Send a notification
client.push.post({}, {
  notification: {
    alert: 'hello!'
  }
})
.then(() => console.log('success!'))
.catch((err) => console.error(err));

// Get notifications

client.push.get()
.then((pushes) => console.log(pushes))
.catch((err) => console.error(err));
```

## License
MIT
