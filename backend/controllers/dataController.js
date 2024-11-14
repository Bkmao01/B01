const mysql = require('mysql');
const db = require('../models/db');  // Connection to MySQL

exports.getDashboardContent = (req, res) => {
  res.json({
    summary: "Here's a 200-word summary about UNCC's latest news...",
    source: "https://www.uncc.edu/latest-news"
  });
};

exports.getSummaryChartData = (req, res) => {
  res.json({
    data: [ /* hardcoded chart data for Summary */ ],
    description: "Summary chart description and source."
  });
};

exports.getReportsChartData = (req, res) => {
  res.json({
    data: [ /* hardcoded chart data for Reports */ ],
    description: "Reports chart description and source."
  });
};
