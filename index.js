const push = require('./lib/push');
const Client = require('./lib/rest');
const { setAPIToken } = Client;


class TaplyticsNode {
  constructor(options) {
    this.api_token = options && options.api_token;

    if (!this.api_token) throw new Error("api_token is required.");

    setAPIToken(this.api_token);
  }
}

const pushMethods = push(Client);

TaplyticsNode.prototype.push = push(Client);

module.exports = TaplyticsNode;
