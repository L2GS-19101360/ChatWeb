'use strict';

const Users = require('../models/chatweb.model');

exports.createUser = function (req, res) {
    const new_user = new Users(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: "Please Provide All Required Field!"
        });
    } else {
        Users.createUser(new_user, function (err, user) {
            if (err) {
                res.send(err);
            } else {
                res.json({
                    error: false,
                    status: 200,
                    message: "User Created Successfully!",
                    data: user
                });
            }
        });
    }
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