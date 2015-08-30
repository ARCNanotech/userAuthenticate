var bcrypt = require('bcrypytjs'),
	Q = require('q'),
	config = require('./config.js'), //config file contains all tokens and private info
	db = require('orchestrate')(config.db); //config.db holds Orcestrate token
	
var bcrypt-node = require('bcrypt-nodejs'),
	 P = require('p'),
	 functions = require("./functions.js") // functions file executes all scripts and commands
	 api = require('twitter-api')(functions.api); // functions.api are the components 
	 
// used in local-signup strategy
exports.localReg = function (username, password) {
	var deferred = 	Q.defer();
	var hash = bcrypt.hashSync(passowrd, 8);
	var user = {
		"username": username,
		"password": password,
	}
}	

var http = require('http');
    httpProxy = require('http-[rpxy')
    // 
    // Create proxy with the target set to arc-tech.visualstudio.com
    //