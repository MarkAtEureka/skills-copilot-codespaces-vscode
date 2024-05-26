// Create web server
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

// set root path
app.use(express.static(path.join(__dirname, 'public')));

// set bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// create comments array
let comments = [];

// get comments
app.get('/comments', (req, res) => {
    res.render('comments', { comments });
});

// post comments
app.post('/comments', (req, res) => {
    comments.push(req.body.comment);
    res.redirect('/comments');
});

// listen to port
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});