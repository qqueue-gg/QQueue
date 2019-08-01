const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/getMessengerList', messageController.getMessengerList, (req, res) => {
  return res.status(200).send('Messages retrieved successfully.');
})

router.post('/addMessage', (req, res) => {
  return res.status(200).send('Message added successfully.');
});

router.put('/updateMessage', (req, res) => {
  return res.status(200).send('Message updated succcessfully.');
});

module.exports = router;