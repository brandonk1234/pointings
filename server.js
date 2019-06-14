const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

// ------ ROUTES ------:
app.get('/', (req, res) => {
    res.send('Hello world');
});

// ----- INIT MIDDLEWARE -----:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ----- CONNECT TO DB -----:
const mongoDB = 'mongodb://localhost/pointings';
mongoose.connect(mongoDB, {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// ----- RUN SERVER -----:
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`)});