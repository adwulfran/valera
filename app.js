var http = require('http');
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = require('express')();
var server = require('http').Server(app);
server.listen(8181);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'forms')));


app.get("/", function(req, res) { 
	res.render("valerahpres.ejs");
})

app.get("/img/:id?", function(req, res) {
	 var image = req.params.id;
	res.sendfile("/root/valerah/views/img/"+image);
})

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});