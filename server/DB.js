require('dotenv').config()



const mysql = require('mysql2');
const cors = require('cors');
const express = require('express');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));



const app = express();
app.use(cors());




// Create a connection pool to MySQL database
const DB = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  // port: DB_PORT || 3306, 
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});



// Route to test if the server is running
app.get('/', (req, res) => {
  return res.json('Welcome to the backend');
});

// Route to fetch all products from the database
app.get('/Products', (req, res) => {
  const sql = "SELECT * FROM Product";
  DB.query(sql, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      return res.status(500).json({ error: 'Database query error' });
    }
    console.log('All products:', JSON.stringify(results));
    return res.json(results);
  });
});

// Route to fetch bestseller products from the database
app.get('/Bestsellers', (req, res) => {
  const sql = 'SELECT * FROM Product WHERE Is_BestSeller = "TRUE"';
  DB.query(sql, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      return res.status(500).json({ error: 'Database query error' });
    }
    console.log('Bestseller products:', JSON.stringify(results));
    return res.json(results);
  });
});

// Start the server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
