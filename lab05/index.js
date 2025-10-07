const express = require('express');
const path = require('path');  // you need this to send html files
const app = express();
const userRouter = require('./routes/users');

// Mount User Router
app.use('/api/v1/user', userRouter);

// Serve home.html at /api/v1/home
app.get('/api/v1/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'routes', 'home.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send('Server Error');
});

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log(`Web Server is listening at port ${PORT}`);
});
