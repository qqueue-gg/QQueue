const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

router.get('/getTeams', teamController.getTeams, (req, res) =>{
  res.status(200).send('okay');
});

router.post('/addTeam', teamController.addTeam, (req, res) => {
  res.status(200).send('buddy');
})

router.put('/updateTeam', teamController.editTeam, (req, res) => {
  res.status(200).send('you');
});

router.delete('/deleteTeam', teamController.deleteTeam, (req, res) => {
  res.status(200).send('chill');
});

module.exports = router;