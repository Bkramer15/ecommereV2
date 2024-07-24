const mysql = require('mysql2');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

// Create a MySQL connection pool
const DB = mysql.createPool({
  host: 'ecommcercev2.chgkyis2in10.us-east-1.rds.amazonaws.com',
  user: 'BirhanuKramer22',
  password: 'xwlsfQL76x',
  database: 'ecommerce3',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test MySQL connection
DB.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database as ID:', connection.threadId);
});

app.get('/', (req, res) => {
  return res.json('Welcome to the backend');
});

// Get all products from the database
app.get('/Products', (req, res) => {
  const sql = "SELECT * FROM Product";
  DB.query(sql, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      return res.status(500).json({ error: 'Database query error' });
    }
    console.log('All products:', JSON.stringify(results)); // Log all products as JSON
    return res.json(results);
  });
});

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

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
