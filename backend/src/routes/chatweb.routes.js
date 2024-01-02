const express = require('express');
const router = express.Router();
const userController = require('../controllers/chatweb.controller');

router.post('/create-user', userController.createUser);
router.post('/login-username', userController.loginByUsername);
router.post('/login-email', userController.loginByEmail);

module.exports = router;
