'use strict';

const Users = require('../models/chatweb.model');

const bcrypt = require('bcrypt');
const saltRounds = 10; 

exports.createUser = function (req, res) {
    const { password, ...otherUserData } = req.body;

    // Hash the password before storing it
    bcrypt.hash(password, saltRounds, function (err, hashedPassword) {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error hashing password' });
        }

        const newUser = { ...otherUserData, password: hashedPassword };

        Users.createUser(newUser, function (err, user) {
            if (err) {
                res.status(500).json({ error: true, message: 'Error creating user', details: err });
            } else {
                res.json({
                    error: false,
                    status: 200,
                    message: 'User Created Successfully!',
                    data: user
                });
            }
        });
    });
};

exports.loginByUsername = function(req, res){
    const username = req.body.username; // Assuming you send 'username' in the request body
    Users.loginByUsername(username, function(err, user) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({
                status: 200,
                data: user
            });
        }
    });
};

exports.loginByEmail = function(req, res){
    const email = req.body.email; // Assuming you send 'email' in the request body
    Users.loginByEmail(email, function(err, user) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({
                status: 200,
                data: user
            });
        }
    });
};