var express = require('express');

var app = express();

app.get("/", function(request, response){
	response.end("Hola Mundo");
});

app.listen(8080);