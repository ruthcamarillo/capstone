const mysql = require('mysql2');

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: 'root',
  password: "password",
  database: 'disaster_dispatch'
  ,
});

db.connect(err => {
  if (err) {
    console.log(err.message)
    return;
  }
  console.log("Connected to MySQL database")
});
