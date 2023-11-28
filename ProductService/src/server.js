const express = require('express');
const {sendToRabbitMQ} = require('./send.js')
const app = express();

app.use(express.json());

app.get('/products',(req,res) => {
    res.send('Product Service')
})

app.post('/products',(req,res) => {
    const body = req.body;
    sendToRabbitMQ('order_queue',body)
    res.json(body)
})

app.listen(3333, () => {
    console.log('Server running!')
})