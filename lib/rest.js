const Client = require('node-rest-client').Client;
const client = new Client();
const BASE_URL = 'https://api.taplytics.com';
let apiToken;

exports.setAPIToken = (token) => { apiToken = token; };

exports.call = (baseOptions) => {
  let fullUrl = BASE_URL + baseOptions.endpoint;

  if (baseOptions.method === 'GET') fullUrl += '?api_token=${api_token}';

  client.registerMethod(baseOptions.name, fullUrl, baseOptions.method);

  return (parameters, data) => new Promise((resolve, reject) => {
    const options = {
      parameters: parameters,
      data: data,
      path: parameters,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    if (baseOptions.method === 'GET') {
      options.parameters.api_token = apiToken;
    } else {
      options.data.api_token = apiToken;
    }

    client.methods[baseOptions.name](options, (data, response) => {
      resolve(data);
    })
    .on('error', reject);
  });
};

exports.client = client;
