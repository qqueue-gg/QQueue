const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/getUser', authController.verifyUser, (req, res) => {
  res.status(200).send(res.locals.userInfo);
});

module.exports = router;
