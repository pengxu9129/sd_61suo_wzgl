var express = require('express');
var app = express();
var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});

// get the client
const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
	host: 'localhost',
	post: 3306,
	user: 'root',
	password: 'Fandiankeji1803',
	database: 'sd_61suo'
});

app.get('/getData', function (req, res) {
	res.header("Access-Control-Allow-Origin","*");
	connection.query('SELECT * FROM `qicai_excel` LIMIT 10000', function(err, results, fields) {
		res.send(JSON.stringify({"wuzi": results}));
	});
});