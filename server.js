const express = require('express');
const app = express();
const productsDB = require('./db.json')

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/products', (req,res) => {
    res.json(productsDB);
})

app.use(express.static('public'));
app.listen(3000);
console.log('Server on port 3000');

