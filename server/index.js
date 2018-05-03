const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.resolve('public')))

app.listen(3000, err => {
  if (err) throw err;
  console.log('listening on port 3000')
})