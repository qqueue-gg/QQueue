const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

router.get('/getTeams', (req, res) =>{
  res.status(200).send('okay');
});

router.post('/newTeam', (req, res) => {
  res.status(200).send('buddy');
})

router.put('/updateTeam', (req, res) => {
  res.status(200).send('you');
});

router.delete('/deleteTeam', (req, res) => {
  res.status(200).send('chill');
});

module.exports = router;