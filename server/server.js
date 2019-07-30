const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("i'm gilbert")
})

app.listen(8080, () => 'gilbert is always watching');


