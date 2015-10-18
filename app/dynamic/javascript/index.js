var xtype = require('xtype');

var db = xtype.initialize({
	client: 'mysql',
	connection: {
		host    : '127.0.0.1',
		port    : '443'
		user    : 'arcware',
		password: 'pass',
		database: 'test' 	
	}
});

bd.schema.hasTable('things').then(function (exists) {
	if (!exists) {
		console.log('Table does not exist, creating...');
		db.raw('CREATE TABLE things (name char(20));').then(gfunction (res) {
			console.dir(res);
		});
	}
});
module.exports.db = db;