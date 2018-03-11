const express = require('express');
const open = require('open');
const path = require('path');

/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
