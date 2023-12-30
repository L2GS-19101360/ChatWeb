'use strict';

var dbConn = require('../../config/db.config');

var Users = function (user) {
    this.lastname = user.lastname;
    this.firstname = user.firstname;
    this.contactnumber = user.contactnumber;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.userimage = user.userimage;
    this.registered = new Date();
    this.updated = new Date();
};

Users.createUser = function (newUser, result) {
    dbConn.query("INSERT INTO users SET ?", newUser, function (err, res) {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Users.loginByUsername = function (username, result) {
    dbConn.query("SELECT * FROM users WHERE username = ?", username, function (err, res) {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
        } else {
            // Assuming res is an array of rows, you might want to handle the result appropriately
            console.log(res);
            result(null, res);
        }
    });
};

Users.loginByEmail = function (email, result) {
    dbConn.query("SELECT * FROM users WHERE email = ?", email, function (err, res) {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
        } else {
            // Assuming res is an array of rows, you might want to handle the result appropriately
            console.log(res);
            result(null, res);
        }
    });
};

module.exports = Users;
