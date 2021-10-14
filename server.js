const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})
/*
app.get('/style.css', (req,res) => {
    //res.setHeader('Content-Type', 'text/css');
    res.sendFile(__dirname + '/static/style.css');
})*/

app.use(express.static('public'));
app.listen(3000);
console.log('Server on port 3000');

