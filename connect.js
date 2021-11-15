let mysql = require('mysql');
const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;
const users = [];


let connection = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'rVUKkMbpS0',
    password: 'gAQuXzLCdW',
    database: 'rVUKkMbpS0'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
  });


app.use(bodyParser.json());
app.listen(port, () => {
    console.log("Connected to DB");
});

  app.get('/test', (req, res) => {
    const date = req.query.date;
    const position = req.query.position;
    // console.log(date, "date", "/", "position: ", [position]);
    connection.query("SELECT * FROM staff WHERE status='true' ", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
          });

  });
  

