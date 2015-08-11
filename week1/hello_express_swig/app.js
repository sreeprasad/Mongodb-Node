var express = require('express');


app = express();
cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views',__dirname+"/views");

app.get('/',function(request,response){

	response.render('hello',{'name':'Sreeprasad'});
});

app.get('*',function(request,response){

	response.send("page not found ",404);
});

app.listen(8080);

console.log("listening to 8080");