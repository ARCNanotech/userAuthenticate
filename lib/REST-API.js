// REST API
// Javascript Source code

var express = require('express')
	, mongoskin = require('mongoskin')
	
var app = express()
app.use(express.bodyParser())

var db = mongoskin.db('localhost:27017/test', {safe:true});

app.param('collectionName', function(req, res, next, collectionName){
	req.collection = db.collection(collectionName)
	return.next()
})	
app.get('/', function(req, res) {
	res.send('please select a collection, e.g., /collections/messages')
})

app.get('/collection/collectionName', function(req, res) {
	req.collection.find({},{limit:10, sort: [['_id',-1]]}).toArray(function(e, resu\
lts){
	if (e) return next(e)
	res.send(results)
  })
})

app.post('/collections/:collectionName', function(req, res) {
	req.collection.insert(req, body, {}, function(e, results){
		if (e) return next (e)
		res.send(results)
	})
})

app.get('/collections/:collectionName/:id', function(req, res) {
	req.collection.findOne({_id: req.collection.id(req.params.id)}, function(e, res\
ult){
	if (e) return next(e)
	res.send(result)
  })
})
