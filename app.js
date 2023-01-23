const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/public'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('home.html');
});

app.get('/about', (req, res) => {
    res.render('about.html');
});

app.get('/history', (req, res) => {
    res.render('history.html');
});

app.get('/gallery', (req, res) => {
    res.render('gallery.html');
});

app.listen(8000, () => {
    console.log('Server started on http://localhost:8000');
});
