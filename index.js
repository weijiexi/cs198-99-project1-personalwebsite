const express = require('express');
const port = 3000;

const app = express();

let totalViews = 0;

app.get('/', (req, res) => {
  totalViews++;
  res.send("<h1>Welcome to my website!</h1> Total views: " + totalViews);
});

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.get('/UX_Portfolio.html', (req, res) => {
    res.sendFile(__dirname + '/UX_Portfolio.html');
  });

app.get('/main.css', (req, res) => {
    res.sendFile(__dirname + '/main.css');
});

app.get('/images/display-1.png', (req, res) => {
    res.sendFile(__dirname + '/images/display-1.png');
});
app.get('/images/display-2.png', (req, res) => {
    res.sendFile(__dirname + '/images/display-2.png');
});

app.get('/images/display-3.png', (req, res) => {
    res.sendFile(__dirname + '/images/display-3.png');
});

app.get('/images/display-4.png', (req, res) => {
    res.sendFile(__dirname + '/images/display-4.png');
});

app.get('/images/display-5.png', (req, res) => {
    res.sendFile(__dirname + '/images/display-5.png');
});

app.get('/images/display-6.png', (req, res) => {
    res.sendFile(__dirname + '/images/display-6.png');
});

app.get('/images/me.png', (req, res) => {
    res.sendFile(__dirname + '/images/me.png');
});

app.get('/messageAdmin.js', (req, res) => {
    res.sendFile(__dirname + '/messageAdmin.js');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});