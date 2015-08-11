var express = require('express');

app = express();

app.get('/',function(request,response){

	response.send("hello world");
});

app.get('*',function(request,response){

	response.send("page not found ",404);
});

app.listen(8080);

console.log("listening to 8080");