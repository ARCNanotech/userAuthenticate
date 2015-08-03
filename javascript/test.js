var db = require('./index.js').db,
	expect = require('chai').expect;
	
describe('MySql Database', function () { 
	it('should create the things table', function () {
		db.schema.hasTable('things').then(function (exists) {
			expect(exists).to.equal(true);
		});
	});
	it('should save a new name', function () {
		db('things')
		.insert({ name: 'Jane' })
		.exec(function (err) {
			expect(err).to.equal(null);
		});
	});
	})	