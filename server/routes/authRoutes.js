const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/getUser', authController.verifyUser, (req, res) => {
  res.status(200).send(res.locals.success);
});

module.exports = router;
