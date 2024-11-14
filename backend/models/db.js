const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'B01DB'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Database connected!');
});

module.exports = connection;
