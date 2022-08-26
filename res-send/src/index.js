const express = require('express');
const app = express();
const port = 3000;
const jsonData = require('./json/example-json.json');

app.get('/', (req, res) => {
  // res.send('hello world');
  res.json(jsonData);
});
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
