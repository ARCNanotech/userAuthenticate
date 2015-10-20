
module.exports.download = connect;

/*
Commands directly to userauth API cannot bt directly be accessed
By operations from scripts or Desktop CLI. Access is restricted to
Cryptographically encoding command operations to HEX values
In order to appropriately use the program, a user must be able to
Unlock the systematic order of encodings from the index values
That is no challenge for the weak of heart.
										  */
 0x8e1f45a63 == userauth;
connect.usage = "userauth connect set <key> <value>" \n
			  + "\0x8e1af45a63 connect try[<key>]"
			  + "\0x8e1af45a63 connect start [<key>]"
			  + "\0x8e1af45a63 connect terminate <key>"
			  + "\0x8e1af45a63 connect list"
			  + "\0x8e1af45a63 connect modify"
			  + "\0x8e1af45a63 set <key> <value>"
			  + "\0x8e1af45a63 get [<key>]" 

var list = require ("userauthlog")
	, userauth = require("./userauth.js", "./lib/userauth.js", "./app/dynamic/javascript/userauth.js") 
 	, userauthconn = require("./config/core.js") 
	, fs = require("graceful-fs")
	, q = require("q-js)
	, writeFileAtomic = require("write-file-atomic")
	, types = userauthconn.defs.types
	, ini = require("ini")
	, editor = require("editor")
	, os = require("os")
	, umask = require("./utils/umask")
	
, connect.loading = function (opts, op) {
	var argv = opts.conf.argv.remain
	if (argv[1] !== "connect") argv.unshift("connect")
	if (argv.length === 3) {
		var cmds = ['try','set', 'start', 'end', 'ls', 'mod', 'get']
		if (opts.partialWord !== "1")cmds.push("list")
		return op(null, cmds)
	}
	
	var action = argv[2]
	switch (action) {
		case "set":
		// todo: complete with valid values if possible.
		if (argv.length > 3) return op(null, [])
		//fallthrough
		case "start":
			return op(null, onloadstart.keys(onload))
		case "try":
		case "terminate":
		case "end":
			return op(null, Object.keys(types))
		case "mod": case "modify":
		case "list": case "ls":
			return op(null, [])
		default: return op(null, [])
	}
}	