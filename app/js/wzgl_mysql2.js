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

// simple query
// connection.query(
// 	'SELECT * FROM `qicai_excel` LIMIT 10000',
// 	function(err, results, fields) {
// 		console.log(results); // results contains rows returned by server
// 		// console.log(fields); // fields contains extra meta data about results, if available
// 	}
// );
connection.query('SELECT * FROM `qicai_excel` LIMIT 10000', function(err, results, fields) {
	if (results) {
		var app4 = new Vue({
			el: '#example1',
			data: {
				results: results
			}	
		})
	}
});


// with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );