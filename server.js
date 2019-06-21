const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const app = express();

// ------ MONGOOSE GLOBAL PROMISE ------:
mongoose.promise = global.Promise;

// ----- INIT MIDDLEWARE -----:
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'pointings', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

// ----- CONNECT TO DB -----:
const mongoDB = 'mongodb://localhost/pointings';
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.set('debug', true);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// ----- MODELS AND ROUTES -----:
app.get('/', (req, res) => {
    res.send('Hello world');
});
require('./src/app/models/Users');
require('./src/app/config/passport');
app.use(require('./src/app/routes'));

// ----- RUN SERVER -----:
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`)});