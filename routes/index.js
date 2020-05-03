var express = require('express');
var router = express.Router();
const http = require('http');

router.get('/', function(req, res, next) {

  const options = {
    socketPath: '/var/run/docker.sock',
    path: '/v1.24/containers/json?all=1',
  };
 
  const callback = response => {
    let data = '';
    response.setEncoding('utf8');
    response.on('data', chunk => { 
      data += chunk;
    });
    response.on('end', () => {
      res.render('index', { 
        services: JSON.parse(data),
        label: process.env.CONTAINER_LABEL
      })
    });
 };
 
  const clientRequest = http.request(options, callback);
  clientRequest.end();
});

module.exports = router;
