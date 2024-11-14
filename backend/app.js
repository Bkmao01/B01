const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authController = require('./controllers/authController');
const dataController = require('./controllers/dataController');
const authMiddleware = require('./middleware/auth');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/login', authController.login);
app.get('/dashboard', authMiddleware, dataController.getDashboardContent);
app.get('/summary-chart', authMiddleware, dataController.getSummaryChartData);
app.get('/reports-chart', authMiddleware, dataController.getReportsChartData);

const PORT = 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
