const mysql = require('mysql');

const mysqlConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdtitec1'
});

mysqlConn.connect((err) => {
    if(err) {
        console.log(err);
        throw err;
    }
    else {
        console.log('DB connection established');
    }
});

module.exports = mysqlConn;