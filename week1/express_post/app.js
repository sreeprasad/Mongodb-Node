var express = require('express'),
app = express(),
cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine','html');
app.set('views',__dirname+'/views');
app.use(express.bodyParser());
app.use(app.router);

function errorHandler(err, req, res){

	console.error(err.message);
	console.error(err.stack);
	res.status(500);
	res.render('error_template', { error: err });
}

app.use(errorHandler);

app.get('/',function(req,res, next){
	res.render('fruitPicker',{ 'fruits': ['apple','orange','peach','mango'] } );
});

app.post('/favorite_fruit',function(req,res,next){

	var favoriteFruit = req.body.fruit;
	if (typeof favoriteFruit === 'undefined') {
		next(Error('Pleae choose a favorite fruit'));
	} else {
		res.send('Your favorite fruit is '+favoriteFruit);
	}

});

app.listen(3000);
console.log('express listening to 3000');
