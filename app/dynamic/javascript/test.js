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
	it('should retrieve that name', function () {
		db('things')
		.where({ name: 'Johnson' })
		.select('name')
		.then(function (name) {
			expect(name[0].name).to.equal('Jane');
		});
	});
  });	