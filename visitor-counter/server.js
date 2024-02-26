const express = require('express');
const moment = require('moment');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001;

// Connect to MongoDB

mongoose.connect('mongodb://127.0.0.1:27017/visitorCounter')
  .then(() => console.log('MongoDB connection successful'))
  .catch(err => console.error('MongoDB connection error:', err));


  const visitSchema = new mongoose.Schema({
    month: String,
    ip: String,
    visitedAt: { type: Date, default: Date.now }
  });
  
  const Visit = mongoose.model('Visit', visitSchema);
  
app.use(cors());

app.get('/api/visits', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const now = moment();
  const currentMonth = now.format('YYYY-MM');

  // Record the visit with IP and timestamp
  const newVisit = new Visit({
    month: currentMonth,
    ip: ip,
  });

  await newVisit.save();

  // Retrieve the count of visits for the current and last month
  const currentMonthVisits = await Visit.countDocuments({ month: currentMonth });
  const lastMonth = now.subtract(1, 'months').format('YYYY-MM');
  const lastMonthVisits = await Visit.countDocuments({ month: lastMonth });

  res.json({
    currentMonthVisits: currentMonthVisits,
    lastMonthVisits: lastMonthVisits,
  });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
