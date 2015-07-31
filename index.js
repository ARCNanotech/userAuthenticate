var xtype = require('xtype');

var db = xtype.initialize({
	client: 'mysql',
	connection: {
		host    : '127.0.0.1',
		port    : '443'
		user    : 'shippable',
		password: 'pass',
		database: 'test' 	
	}
});