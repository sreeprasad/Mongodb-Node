var MongoClient  = require('mongodb').MongoClient;

// open connection
MongoClient.connect('mongodb://localhost:27017/test',function(err,db){

	if(err) throw err;

	db.collection('coll').findOne({},function(err,doc){

			if(err) throw err;

			// Prind result
			console.dir(doc);

			db.close();
	});

	console.log("Called findOne");
});