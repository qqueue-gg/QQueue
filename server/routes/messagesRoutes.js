const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/getMessengerList', messageController.getMessengerList, (req, res) => {
  return res.status(200).send('Messages retrieved successfully.');
})

router.post('/addMessage', messageController.addMessage, (req, res) => {
  return res.status(200).send('Message added successfully.');
});

router.put('/updateMessage', messageController.updateMessage, (req, res) => {
  return res.status(200).send('Message updated succcessfully.');
});

router.post('/getOurConvo', messageController.getOurConvo, (req, res) =>{
  return res.status(200).send('Message yeet');
});

module.exports = router;