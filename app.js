const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/ping', (req, res) => res.json({ pong: true }));

module.exports = app;
