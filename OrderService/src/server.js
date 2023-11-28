const express = require('express');
const {receiveDataFromRabbitMQ} = require('./receive.js')
const app = express();

app.use(express.json());

receiveDataFromRabbitMQ('order_queue')

app.listen(3334, () => {
    console.log('Server running!')
})