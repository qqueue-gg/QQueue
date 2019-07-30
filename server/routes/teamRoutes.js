const express = require('express');
const router = express.Router();


app.get('/getTeams', (req, res) =>{
  res.status(200).send('okay');
});

app.post('/newTeam', (req, res) => {
  res.status(200).send('buddy');
})

app.put('/updateTeam', (req, res) => {
  res.status(200).send('you');
});

app.delete('/deleteTeam', (requ, res) => {
  res.status(200).send('chill');
});

module.export = router;