const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("i'm gilbert")
});

/*   User Endpoints     */
app.get('/getUsers', (req, res) =>{
  res.status(200).send('ye');
});

app.put('/updateUser', (req, res) => {
  res.status(200).send('work');
});

app.delete('/deleteUser', (requ, res) => {
  res.status(200).send('it');
});



/*    Team EndPoints   */
app.get('/getTeams', (req, res) =>{
  res.status(200).send('okay');
});
app.put('/updateTeam', (req, res) => {
  res.status(200).send('you');
});

app.delete('/deleteTeam', (requ, res) => {
  res.status(200).send('chill');
});

app.listen(8080, () => 'gilbert is always watching');