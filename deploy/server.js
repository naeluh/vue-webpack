/* eslint no-console: 0 */

const path = require('path');
const express = require('express');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = 3001;
const app = express();

app.use(express.static(__dirname + '/dist'));
app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});