// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt=require('jsonwebtoken');
const bodyParser=require('body-parser')
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/washroomDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const authRoutes = require('./routes/auth');
const washroomRoutes = require('./routes/washroom');

const authMiddleware = require('./Middlewares/authmiddle');
const reportSchema = new mongoose.Schema({
  loginTime: String,
  cleaningTime: String,
  endTime: String
});

const Report = mongoose.model('Report', reportSchema);

// Endpoint to save report
// app.post('/api/reports', async (req, res) => {
//   const { loginTime, cleaningTime, endTime } = req.body;
//   const newReport = new Report({ loginTime, cleaningTime, endTime });
//   await newReport.save();
//   res.status(201).send(newReport);
// });

// // Endpoint to fetch reports
// app.get('/api/reports/:id', async (req, res) => {
//   const report = await Report.findById(req.params.id);
//   res.status(200).send(report);
// });
app.get('/api/reports/:id', (req, res) => {
  const reportId = req.params.id;

  // Example data - replace this with actual data fetching logic if needed
  const report = {
    id: reportId,
    loginTime: '2023-07-19 08:00:00',
    cleaningTime: '2023-07-19 08:30:00',
    endTime: '2023-07-19 09:00:00'
  };

  // Simulate fetching report from a database
  if (reportId === req.params.id) {
    res.json(report);
  } else {
    res.status(404).json({ error: 'Report not found' });
  }
});

// server.js

// Import necessary modules and models

// Example endpoint to fetch user's report data
// Example endpoint to fetch user's report data
// app.get('/api/user/:userId/report', authMiddleware, async (req, res) => {
//   const { userId } = req.params;

//   try {
//     // Example logic to fetch cleaning report data for the user
//     const report = await CleaningReport.findOne({ userId });

//     if (!report) {
//       return res.status(404).json({ msg: 'Cleaning report not found' });
//     }

//     res.json({
//       loginTime: report.loginTime,
//       cleaningTime: report.cleaningTime,
//       endTime: report.endTime,
//     });
//   } catch (err) {
//     console.error('Error fetching report data:', err);
//     res.status(500).json({ msg: 'Server Error' });
//   }
// });

// app.get('/api/reports/:id', (req, res) => {
//   const reportId = req.params.id;
  
//   // Fetch the report data from your database
//   // Example data:
//   const report = {
//     id: reportId,
//     loginTime: '2023-07-19 08:00:00',
//     cleaningTime: '2023-07-19 08:30:00',
//     endTime: '2023-07-19 09:00:00'
//   };

//   res.json(report);
// });


app.use('/api/auth', authRoutes);
app.use('/api/washroom', washroomRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
