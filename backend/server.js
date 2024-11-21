const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { expressjwt } = require('express-jwt');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 30001;
const secretKey = "ben";

console.log('Server is starting...');

app.use(bodyParser.json());
app.use(cors());

const jwtMiddleware = expressjwt({
    secret: secretKey,
    algorithms: ['HS256']
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'changeme',
  database: 'b01'
});

db.connect(err => {
  if (err) throw err;
  console.log('Database connected...');
});

// Function to seed the initial user
const seedUser = () => {
  const username = 'ben';
  const password = 'ben';
  const hashedPassword = bcrypt.hashSync(password, 8);

  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, hashedPassword], (err, results) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        console.log('User already exists');
      } else {
        throw err;
      }
    } else {
      console.log('User added');
    }
  });
};

// Call the function to seed the user
seedUser();

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      const user = results[0];
      if (bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '7d' });
        res.json({
          success: true,
          err: null,
          token
        });
      } else {
        res.status(401).json({
          success: false,
          token: null,
          err: 'Username or password is incorrect'
        });
      }
    } else {
      res.status(401).json({
        success: false,
        token: null,
        err: 'Username or password is incorrect'
      });
    }
  });
});

app.get('/api/dashboard', jwtMiddleware, (req, res) => {
  res.json({
    success: true,
    text: 'Secret content that only logged in people can see'
  });
});

app.get('/api/prices', jwtMiddleware, (req, res) => {
  res.json({
    success: true,
    text: 'Price is $3.99'
  });
});

app.get('/api/settings', jwtMiddleware, (req, res) => {
  res.json({
    success: true,
    text: 'Settings content that only logged in people can see'
  });
});

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
      success: false,
      officialError: err,
      err: 'Username or Password is incorrect 2'
    });
  } else {
    next(err);
  }
});

app.listen(port, () => {
  console.log(`Serving on port: ${port}`);
});

app.get('/api/summary-chart-data', (req, res) => {
    const chartData = [
      { category: 'Finance', value: 3 },
      { category: 'Mathematics', value: 5 },
      { category: 'Computer Science', value: 11 },
      { category: 'Engineering Technology', value: 19 },
      { category: 'Health Professions', value: 17 }
    ];
    res.json(chartData);
  });
  
  app.get('/api/reports-chart-data', (req, res) => {
    const chartData = [
      { category: 'African American', value: 31 },
      { category: 'Asian American', value: 19 },
      { category: 'Hispanic/Latinx', value: 14 }
    ];
    res.json(chartData);
  });