const express = require('express');
const router = express.Router();
const userController = require('../controllers/chatweb.controller');

router.post('/create-user', userController.createUser);
router.get('/login-username/:username', userController.loginByUsername);

module.exports = router;
