// json-to-mysql.js
// "start": "babel-node app/json-to-mysql.js"
import json2mysql from "json2mysql"

const dbconfig = require('./dbconfig.json');
const jm = new json2mysql(dbconfig);
jm.load("qicai_excel", __dirname + "/data/new_qicai.json");