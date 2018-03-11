const express = require('express');
const open = require('open');
const path = require('path');

/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('build'));

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

// if (process.env.NODE_ENV === 'production') {
//   // Express will serve up production assets
//   // like our main.js file, or main.css file!
//   app.use(express.static('build'));

//   // Express will serve up the index.html file
//   // if it doesn't recognize the route
//   const path = require('path');
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

// const PORT = process.env.PORT || 3000;
// app.listen(PORT);