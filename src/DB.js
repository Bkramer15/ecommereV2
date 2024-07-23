const mysql = require('mysql2');
const cors = require('cors');
const express = require('express');
const { connect } = require('http2');
const Connection = require('mysql/lib/Connection');

const app = express();
app.use(cors());

console.log('YOu');

const DB = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
  
});

// console.log(DB);

connection.connect((err) => {
  if(err){
    console.log("error connecting", err.stack)
    return;
  }
  console.log("connected to the database")
});

connection.end();


app.get('/', (req, res) => {
  return res.json('Welcome to the backend');
});

// Get all products from the database
app.get('/Products', (req, res) => {
  const sql = "SELECT * FROM Product";
  DB.query(sql, (err, results) => {
    console.log('you');//ok this line works lol
    if (err) {
      console.error("Error querying database:", err);
      return res.status(500).json({ error: 'Database query error' });
    }
    console.log('All products:', JSON.stringify(results)); // Log all products as JSON
    return res.json(results);
  });
});

// console.log("just checking if this line works");

// Get bestseller products from the database
app.get('/Bestsellers', (req, res) => {
  const sql = 'SELECT * FROM Product WHERE Is_BestSeller = "TRUE"';
  DB.query(sql, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      return res.status(500).json({ error: 'Database query error' });
    }
    console.log('Bestseller products:', JSON.stringify(results)); // Log bestseller products as JSON
    return res.json(results);
  });
});

console.log('trjrokroekorkeerr')

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
