const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Routes

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => { console.log(`Server listening on port ${port}`) })