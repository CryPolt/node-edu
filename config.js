const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    database: "test",
    user: "crypolt",
    password: "root",
    port: 3310,
})

db.connect(err => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log('connected successfully');
});