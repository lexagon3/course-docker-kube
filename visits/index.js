const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  // This would be a URL, but Docker will know what we are talking about and redirect to the redis-server container.
  host: 'redis-server',
  port: 6379
});

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send(`Number of visits is ${visits} `);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
