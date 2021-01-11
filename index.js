const sql = require('mssql');
const express = require('express');
const { response } = require('express');
let server = express();


server.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'earagon',
        password: 'Pass123!',
        server: 'localhost', 
        database: 'Video Games' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from Players', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

server.listen(5000, function () {
    console.log('Server is running..');
});

