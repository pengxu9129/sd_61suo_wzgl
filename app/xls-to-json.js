// xls-to-json.js
node_xj = require("xls-to-json");

node_xj({
	input: "./data/new_qicai.xlsx",  // input xls
	output: "./data/new_qicai.json", // output json
	sheet: "Sheet1"  // specific sheetname
}, function(err, result) {
	if(err) {
		console.error(err);
	} else {
		console.log(result);
	}
});