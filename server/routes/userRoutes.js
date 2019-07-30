const express = require('express');
const router = express.Router();

// Get all Users
app.get('/getUsers', (req, res) =>{
  res.status(200).send('ye');
});

app.post('/newUser', (req, res) =>{
  res.status(200).send('boi');
});

app.put('/updateUser', (req, res) => {
  res.status(200).send('work');
});

app.delete('/deleteUser', (requ, res) => {
  res.status(200).send('it');
});

module.export = router;