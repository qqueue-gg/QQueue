const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all Users
router.get('/getUsers', userController.getUsers, (req, res) =>{
  res.status(200).send('ye');
});

router.post('/newUser', userController.addUser, (req, res) =>{
  res.status(200).send('boi');
});

router.post('/loginUser', (req, res) =>{
  res.status(200).send('fricken');
})

router.put('/updateUser', userController.editUser, (req, res) => {
  res.status(200).send('work');
});

router.delete('/deleteUser', userController.deleteUser, (req, res) => {
  res.status(200).send('it');
});

module.exports = router;