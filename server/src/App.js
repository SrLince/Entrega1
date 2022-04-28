const express = require('express');
const path = require('path');
const cors = require('cors');
const { mysql } = require('./config/database');

const app = express();

// Settings
app.set('port', process.env.PORT || 3001);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/admin', require('./routes/admin'));
app.use('/api/user', require('./routes/user'));

// Server
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});