'use strict';

const Users = require('../models/chatweb.model');

exports.create = function (req, res) {
    const new_user = new Users(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: "Please Provide All Required Field!"
        });
    } else {
        Users.create(new_user, function (err, user) {
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
