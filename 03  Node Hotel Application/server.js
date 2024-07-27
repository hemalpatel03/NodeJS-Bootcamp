const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
const MenuItem = require('./models/MenuItem');
const passport = require('./auth');
const person = require('./models/person');

app.use(bodyParser.json());

//Middleware Function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next();
}
app.use(logRequest);


app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local', {session: false});
app.get('/', function (req, res) {
    res.send('welcome to my hotel...');
});

const personRoutes = require('./routes/personRoutes');
const MenuItemRoutes = require('./routes/MenuItemRoutes');

app.use('/person', personRoutes);
app.use('/menu', MenuItemRoutes);


app.listen(3000, () => {
    console.log('listening on port 3000');
});