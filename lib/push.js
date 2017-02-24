
module.exports = (client) => ({
  get: client.call({
    name: 'push.get',
    endpoint: '/v2/push',
    method: 'GET',
  }),
  post: client.call({
    name: 'push.post',
    endpoint: '/v2/push',
    method: 'POST',
  })
})
