require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.enable('trust-proxy')
app.get('/api/whoami', (req, res) => {
  let ip = req.ip
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];
  res.send({
    ipaddress: ip,
    language: language,
    software: software
  });
});