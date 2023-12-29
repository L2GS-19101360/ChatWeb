'use restrict';

var dbConn = require('../../config/db.config');

var Users = function(user){
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

Users.create = function(newUser, result){
    
};