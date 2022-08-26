const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('root');
});
app.get('/about', (req, res) => {
  res.send('about');
});

app.post('/', (req, res) => {
  res.send('POST request to homepage');
});

// all is NOT a catchall for routes
// all is GET, POST, DELETE, PARAM, and ALL HTTP methods
app.all('/secret', (req, res, next) => {
  console.log('accessing the secret section');
  next();
});

app.listen(port, () => {
  console.log(`app is running on port ${3000}`);
});
